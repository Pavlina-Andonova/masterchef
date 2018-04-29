import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  isSignupModalOpen = false;
  isSigninModalOpen = false;

  isModalOpen = true;

  handleSigninModal(isModalOpen: boolean) {
    console.log(isModalOpen);
    this.isSigninModalOpen = isModalOpen;
  }
  handleSignupModal(isModalOpen: boolean) {
    console.log(isModalOpen);
    this.isSignupModalOpen = isModalOpen;
  }
}
