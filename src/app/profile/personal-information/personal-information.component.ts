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
  passErrorMessage: string = "";
  profileErrorMessage: string = "";
  userData;
  emailData;
  userEmail;
  formData;
  userPassData = {
    currentPassword: "",
    newPassword: "",
    repPassword: ""
  };
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
          firstName: this.userData.firstName,
          lastName: this.userData.lastName
        };

        this.profileForm.setValue(updatedData);
      }
    );

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
      email: "required|email"
    });

    this.profilePasswordChangeForm = new ValidationManager({
      currentPassword: "required",
      newPassword: "required",
      repPassword: "required|equalTo:newPassword"
    });

    this.profilePasswordChangeForm.setErrorMessage(
      "currentPassword",
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

  onSubmitProfileInfo() {
    this.profileForm.formGroup.value;

    if (!this.profileForm.isValid()) {
      this.profileErrorMessage = this.getFirstErrorMessage(
        this.profileForm.getErrors()
      );
    } else {
      this.profileErrorMessage = "";
      const formData = this.profileForm.formGroup.value;
      const emailData = {
        email: this.profileForm.formGroup.value.email
      };

      delete formData.email;

      this.profileService.updateUserData(formData).subscribe(res => {
        this.userData = res;
      });
      this.authService.updateUserEmail(emailData).subscribe(res => {
        this.emailData = res;
      });
    }
  }

  onSubmitPasswordInfo() {
    if (!this.profilePasswordChangeForm.isValid()) {
      this.passErrorMessage = this.getFirstErrorMessage(
        this.profilePasswordChangeForm.getErrors()
      );
    } else {
      this.passErrorMessage = "";
      this.profilePasswordChangeForm.reset();

      // Send this.profilePasswordChangeForm.formGroup.value
    }
  }

  getFirstErrorMessage(errors: any) {
    const errorMessages = Object.values(errors).filter(message => {
      return message.length > 0;
    });

    return errorMessages.length > 0 ? errorMessages[0] : "";
  }
}
