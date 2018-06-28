import { Component, OnInit } from "@angular/core";
import { ValidationManager } from "ng2-validation-manager";
import { AuthService } from "../../auth/auth.service";
import { Subscription } from "rxjs/Subscription";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-personal-information",
  templateUrl: "./personal-information.component.html",
  styleUrls: ["./personal-information.component.scss"]
})
export class PersonalInformationComponent implements OnInit {
  subscription: Subscription;
  profileForm: any;
  profilePasswordChangeForm: any;
  passMessage: string = "";
  profileMessage: string = "";
  isProfileErr: boolean = false;
  isPassErr: boolean = false;
  userData;
  emailData;
  userEmail;
  passData;
  formData;
  userPassData = {
    oldPassword: "",
    newPassword: "",
    repPassword: ""
  };
  selectedFile: File;
  url: string;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.userData = this.authService.getCurrentUser();
    this.subscription = this.authService.userAuthenticationChanged.subscribe(
      (user: any) => {
        this.userData = user;
        const updatedData = {
          ...this.formData,
          firstName: this.userData.firstName || "",
          lastName: this.userData.lastName || "",
          profileImage: this.userData.profileImage || ""
        };
        this.profileForm.setValue(updatedData);
        this.url = this.userData.profileImage;
      }
    );

    if (this.userData) {
      this.url = this.userData.profileImage;
    }

    this.authService.getUserEmail().subscribe((res: any) => {
      this.userEmail = res.email;
      const updatedData = {
        ...this.formData,
        email: this.userEmail
      };

      this.profileForm.setValue(updatedData);
    });

    this.profileForm = new ValidationManager({
      firstName: "required",
      lastName: "",
      email: "required|email",
      profileImage: ""
    });

    this.profilePasswordChangeForm = new ValidationManager({
      oldPassword: "required",
      newPassword: "required",
      repPassword: "required|equalTo:newPassword"
    });

    this.profilePasswordChangeForm.setErrorMessage(
      "oldPassword",
      "required",
      "Current password field is required!"
    );
    this.profilePasswordChangeForm.setErrorMessage(
      "newPassword",
      "required",
      "New password field is required!"
    );
    this.profilePasswordChangeForm.setErrorMessage(
      "repPassword",
      "required",
      "Repeat password field is required!"
    );
    this.profilePasswordChangeForm.setErrorMessage(
      "repPassword",
      "equalTo",
      "The passwords does not match!"
    );
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
    this.profileForm.setValue({
      profileImage:
        "/assets/uploads/userImages/" + this.renameImage(this.selectedFile.name)
    });
  }

  updateData() {
    this.profileMessage = "";
    this.isProfileErr = false;
    const formData = this.profileForm.formGroup.value;
    const emailData = {
      email: this.profileForm.formGroup.value.email
    };
    delete formData.email;
    this.profileForm.setValue(emailData);
    this.sendUpdateProfileRequest(formData);
    this.sendUpdateEmailRequest(emailData);

    this.profileMessage = "Sucessfully updated!";
  }

  renameImage(originalname) {
    const imgName = originalname.split(".");
    const extension = imgName.pop();
    return this.userData.firstName + this.userData.id + "." + extension;
  }

  onSubmitProfileInfo() {
    if (this.profileForm.isValid()) {
      if (this.selectedFile) {
        const uploadData = new FormData();
        uploadData.append(
          "avatar",
          this.selectedFile,
          "/assets/uploads/userImages/" +
            this.renameImage(this.selectedFile.name)
        );
        this.profileService.uploadFormData(uploadData).subscribe((res: any) => {
          this.url =
            "/assets/uploads/userImages/" +
            this.renameImage(this.selectedFile.name);
          this.updateData();
        });
      } else {
        this.updateData();
      }
    } else {
      this.isProfileErr = true;
      this.profileMessage = this.getFirstErrorMessage(
        this.profileForm.getErrors()
      );
    }
  }

  onSubmitPasswordInfo() {
    if (this.profilePasswordChangeForm.isValid()) {
      this.isPassErr = false;
      this.authService
        .updateUserPassword(this.profilePasswordChangeForm.formGroup.value)
        .subscribe(
          res => {
            this.isPassErr = false;
            this.passMessage = this.getFirstErrorMessage(res);
          },
          err => {
            this.isPassErr = true;
            this.passMessage = this.getFirstErrorMessage(err.error);
          }
        );
      this.profilePasswordChangeForm.reset();
    } else {
      this.isPassErr = true;
      this.passMessage = this.getFirstErrorMessage(
        this.profilePasswordChangeForm.getErrors()
      );
    }

    setTimeout(() => {
      this.isPassErr = false;
      this.passMessage = "";
    }, 5000);
  }

  sendUpdateProfileRequest(profileData: any) {
    this.profileService.updateUserData(profileData).subscribe(
      res => {
        this.userData = res;
      },
      err => {
        this.isProfileErr = true;
        this.profileMessage = "Something went wrong!";
      }
    );
  }

  sendUpdateEmailRequest(emailData: any) {
    this.authService.updateUserEmail(emailData).subscribe(
      res => {
        this.emailData = res;
      },
      err => {
        this.isProfileErr = true;
        this.profileMessage = "Something went wrong!";
      }
    );

    setTimeout(() => {
      this.isProfileErr = false;
      this.profileMessage = "";
    }, 5000);
  }

  getFirstErrorMessage(errors: any) {
    const errorMessages = Object.values(errors).filter(message => {
      return message.length > 0;
    });

    return errorMessages.length > 0 ? errorMessages[0] : "";
  }
}
