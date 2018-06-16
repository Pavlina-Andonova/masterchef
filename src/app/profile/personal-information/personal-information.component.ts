import { Component, OnInit } from "@angular/core";
import { ValidationManager } from "../../shared/Services/validation-manager";
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
  errorMessage: string = "";
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
      firstName: "",
      lastName: "",
      email: ""
    });

    this.profilePasswordChangeForm = new ValidationManager({
      currentPassword: "required",
      newPassword: "required",
      repPassword: "equalTo:newPassword"
    });
  }

  onSubmitProfileInfo() {
    this.userData = this.profileForm.setValue(this.profileForm.formGroup.value);
  }

  onSubmitPasswordInfo() {
    if (!this.profilePasswordChangeForm.isValid()) {
      this.errorMessage = this.getFirstErrorMessage(
        this.profilePasswordChangeForm.getErrors()
      );
    } else {
      this.errorMessage = "";
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
