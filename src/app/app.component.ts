import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";
  isSignupModalOpen = false;
  isSigninModalOpen = false;

  isModalOpen = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const authenticationToken = sessionStorage.getItem("jwtToken");
    if (authenticationToken) {
      this.authService.getUser(authenticationToken).subscribe(
        (response: Response) => {
          this.authService.setIsUserAuthenticated(response);
        },
        error => {
          this.authService.setIsUserAuthenticated(null);
        }
      );
    } else {
      this.authService.setIsUserAuthenticated(null);
    }
  }

  handleSigninModal(isModalOpen: boolean) {
    this.isSigninModalOpen = isModalOpen;
  }

  handleSignupModal(isModalOpen: boolean) {
    this.isSignupModalOpen = isModalOpen;
  }

}
