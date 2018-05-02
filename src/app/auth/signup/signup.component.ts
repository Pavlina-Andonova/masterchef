import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ValidationManager } from "../../shared/Services/validation-manager";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  
  @Output() getSignupModalStateChange = new EventEmitter<boolean>();
  isModal = true;
  
  form: any;
  data: any;
  message = { email: "", password: "" };

  constructor(private authServcie: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new ValidationManager({
      'email': 'required|email',
      'password': 'required|rangeLength:4,15',
      'confirmPassword': 'required'
    });

    
  }

  signup() {
    let userData = {...this.form.formGroup.value};
    delete userData.confirmPassword;

    this.authServcie.registerUser(userData).subscribe(
      resp => {
        this.data = resp;
        localStorage.setItem("jwtToken", this.data.token);
        this.authServcie.setIsUserAuthenticated(!!resp);
        this.router.navigate([""]);
        this.isModal = false;
        this.getSignupModalStateChange.emit(false);
      },
      err => {
        this.message = err.error.msg;
      }
    );
    console.log(this.form.formGroup.value)
  }

  handleCloseModal(isModalClosed) {
    isModalClosed && this.getSignupModalStateChange.emit(false);
  }
}
