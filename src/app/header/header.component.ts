import { Component, Output, EventEmitter } from "@angular/core";

import { Subscription } from "rxjs/Subscription";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  subscription: Subscription;
  isUserAuthenticated: boolean;
  @Output() getSigninModalStateChange = new EventEmitter<boolean>();
  @Output() getSignupModalStateChange = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isUserAuthenticated = this.authService.checkIfUserIsAuthenticated();
    this.subscription = this.authService.userAuthenticationChanged.subscribe(
      (isUserAuthenticated: boolean) => {
        this.isUserAuthenticated = isUserAuthenticated;
      }
    );
  }

  onLogout() {
    localStorage.removeItem("jwtToken");
    this.authService.setIsUserAuthenticated(false);
    this.router.navigate(["signin"]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openSignupModal() {
    this.getSignupModalStateChange.emit(true);
  }

  openSigninModal() {
    this.getSigninModalStateChange.emit(true);
  }
}
