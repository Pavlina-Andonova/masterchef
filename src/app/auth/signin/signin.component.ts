import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  @Output() getSigninModalStateChange = new EventEmitter<boolean>();
  isModal = true;

  loginData = { email: "", password: "" };
  message = { user: "", password: "" };
  data: any;
  constructor(private aurhService: AuthService, private router: Router) {}
  ngOnInit() {}

  signin() {
    this.aurhService.loginUser(this.loginData).subscribe(
      resp => {
        this.data = resp;
        localStorage.setItem("jwtToken", this.data.token);
        this.aurhService.setIsUserAuthenticated(!!resp);
        this.router.navigate([""]);
        this.isModal = false;
        this.getSigninModalStateChange.emit(false);
      },
      err => {
        this.message = err.error.msg;
      }
    );
  }


  closeModal() {
    this.isModal = false;
    this.getSigninModalStateChange.emit(false);
  }
}
