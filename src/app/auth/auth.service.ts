import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AuthService {
  isUserAuthenticated: false;
  userAuthenticationChanged = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(userData) {
    return this.http.post("/api/users", userData);
  }

  loginUser(userData) {
    return this.http.post('/api/users/login', userData);
  }

  setIsUserAuthenticated(isUserAuthenticated) {
    this.isUserAuthenticated = isUserAuthenticated;
    this.userAuthenticationChanged.next(this.isUserAuthenticated);
  }

  checkIfUserIsAuthenticated() {
    return !!localStorage.getItem("jwtToken");
  }
}
