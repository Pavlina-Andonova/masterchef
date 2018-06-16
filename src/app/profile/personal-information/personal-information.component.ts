import { Component, OnInit } from "@angular/core";
import { ValidationManager } from "ng2-validation-manager";
import { AuthService } from "../../auth/auth.service";
import { Subscription } from "rxjs/Subscription";

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
  userPassData = {
    currentPassword: "",
    newPassword: "",
    repPassword: ""
  };
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userData = this.authService.getCurrentUser();
    this.subscription = this.authService.userAuthenticationChanged.subscribe(
      (user: any) => {
        this.userData = user;
        console.log(user);
      }
    );

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

    this.profilePasswordChangeForm.setErrorMessage('currentPassword', 'required', 'Current password field is required!');
    this.profilePasswordChangeForm.setErrorMessage('newPassword', 'required', 'New password field is required!');
    this.profilePasswordChangeForm.setErrorMessage('repPassword', 'required', 'Repeat password field is required!');
    this.profilePasswordChangeForm.setErrorMessage('repPassword', 'equalTo', 'The passwords does not match!');
  }

  onSubmitProfileInfo() {
    this.profileForm.formGroup.value;

    if (!this.profileForm.isValid()) {
      this.profileErrorMessage = this.getFirstErrorMessage(
        this.profileForm.getErrors()
      );
    } else {
      this.profileErrorMessage = "";
      this.profileForm.reset();

      // Send this.profilePasswordChangeForm.formGroup.value
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

