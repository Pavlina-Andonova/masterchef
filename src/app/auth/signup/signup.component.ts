import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  signupData = { email: "", password: "" };
  message = { email: "", password: "" };
  data: any;

  @Output() getSignupModalStateChange = new EventEmitter<boolean>();
  isModal = true;

  constructor(private authServcie: AuthService, private router: Router) {}

  ngOnInit() {}

  signup() {
    this.authServcie.registerUser(this.signupData).subscribe(
      resp => {
        this.data = resp;
        localStorage.setItem("jwtToken", this.data.token);
        this.authServcie.setIsUserAuthenticated(!!resp);
        this.router.navigate([""]);
      },
      err => {
        this.message = err.error.msg;
      }
    );
  }

  closeModal() {
    this.isModal = false;
    this.getSignupModalStateChange.emit(false);
  }
}
