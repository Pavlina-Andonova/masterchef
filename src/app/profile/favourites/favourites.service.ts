import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class FavouritesService {
  constructor(private http: HttpClient) {}

  setHeader() {
    return {
      headers: new HttpHeaders({ 'Authorization': sessionStorage.getItem("jwtToken") })
    };
  }

  addFavourite(menuItemId) {
    return this.http.post(
      "/api/favourites/add",
      { menuItemId: menuItemId },
      this.setHeader()
    );
  }

  getFavourites() {
    return this.http.get("/api/favourites", this.setHeader());
  }

  deleteFavourite(menuItemId) {
    return this.http.post(
      "/api/favourites/remove",
      { menuItemId: menuItemId },
      this.setHeader()
    );
  }
}
