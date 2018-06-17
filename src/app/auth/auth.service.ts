import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AuthService {
  currentUser: any = null;
  userAuthenticationChanged = new Subject<any>();

  constructor(private http: HttpClient, private router: Router) {}

  setHeader() {
    return {
      headers: new HttpHeaders({
        Authorization: sessionStorage.getItem("jwtToken")
      })
    };
  }

  registerUser(userData) {
    return this.http.post("/api/users", userData);
  }

  loginUser(userData) {
    return this.http.post("/api/users/login", userData);
  }

  getUserEmail() {
    return this.http.get("/api/profile/email", this.setHeader());
  }

  updateUserEmail(emailData) {
    return this.http.put("/api/profile/email", emailData, this.setHeader());
  }

  setIsUserAuthenticated(user: any) {
    this.currentUser = user;
    this.userAuthenticationChanged.next(this.currentUser);
  }

  checkIfUserIsAuthenticated(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getUser(token) {
    return this.http.get("/api/users", this.setHeader());
  }

  updateUserPassword(passwordData) {
    return this.http.put(
      "/api/profile/password",
      passwordData,
      this.setHeader()
    );
  }
}
