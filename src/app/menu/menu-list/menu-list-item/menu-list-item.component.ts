import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { MenuService } from "../../menu.service";
import { FavouritesService } from "../../../profile/favourites/favourites.service";
import { AuthService } from "../../../auth/auth.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-menu-list-item",
  templateUrl: "./menu-list-item.component.html",
  styleUrls: ["./menu-list-item.component.scss"]
})
export class MenuListItemComponent implements OnInit {
  @Input() menuItem;
  @Output() newFavouriteItemAdded = new EventEmitter<any>();

  constructor(private favService: FavouritesService) {}

  ngOnInit() {}

  toggleFavourite() {
    if(this.menuItem.isFavourite) {
      this.favService.deleteFavourite(this.menuItem.id).subscribe((res: any) => {
        this.menuItem.isFavourite = res.result;
      });
    } else {
      this.favService.addFavourite(this.menuItem.id).subscribe((res: any) => {
        this.menuItem.isFavourite = res.result;
        console.log(this.menuItem);
      });
    }
  }
}
