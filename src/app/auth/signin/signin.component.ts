import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ValidationManager } from "../../shared/Services/validation-manager";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {

  @Output() getSigninModalStateChange = new EventEmitter<boolean>();
  isModal = true;

  form: any;
  data: any;
  message = { user: "", password: "" };
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new ValidationManager({
      'email': 'required|email',
      'password': 'required|rangeLength:4,15'
    });
    console.log(this.form);
  }
  signin() {
    console.log(this.form);
    this.authService.loginUser(this.form.formGroup.value).subscribe(
      resp => {
        this.data = resp;
        sessionStorage.setItem("jwtToken", this.data.token);
        this.authService.setIsUserAuthenticated(!!resp);
        this.router.navigate([""]);
        this.isModal = false;
        this.getSigninModalStateChange.emit(false);
      },
      err => {
        this.message = err.error.msg;
        this.authService.setIsUserAuthenticated(false);
      }
    );
    console.log(this.data);
  }

  handleCloseModal(isModalClosed) {
    isModalClosed && this.getSigninModalStateChange.emit(false);
  }
}
