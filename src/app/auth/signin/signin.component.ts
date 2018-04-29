import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
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
      },
      err => {
        this.message = err.error.msg;
      }
    );
  }
}
