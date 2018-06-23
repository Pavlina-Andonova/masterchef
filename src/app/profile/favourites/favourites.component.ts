import { Component, OnInit } from "@angular/core";
import { FavouritesService } from "./favourites.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.scss"]
})
export class FavouritesComponent implements OnInit {
  favouriteItems: any;

  constructor(
    private favouritesService: FavouritesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.favouritesService.getFavourites().subscribe(resp => {
      this.favouriteItems = resp;
    });
  }

  handleDeletedFavItem(favItemId){
    this.favouriteItems = this.favouriteItems.filter(item => {
      return item.id !== favItemId;
    });
  }
  
}
