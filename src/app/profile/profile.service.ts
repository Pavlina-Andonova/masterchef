import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  setHeader() {
    return {
      headers: new HttpHeaders({
        Authorization: sessionStorage.getItem("jwtToken")
      })
    };
  }

  updateUserData(profileData: any) {
    return this.http.put("/api/profile", profileData, this.setHeader());
  }

  uploadFormData(formData: FormData) {
    return this.http.post("/api/profile/image", formData);
  }
}
