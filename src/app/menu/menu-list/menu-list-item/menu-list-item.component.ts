import { Component, OnInit, EventEmitter, Output } from "@angular/core";
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
  menu: any;
  menuItem;
  favouriteMenuItems;
  selectedItem;

  @Output() newFavouriteItemAdded = new EventEmitter<any>();
  currentUser: any;
  criteria = "";
  subscription: Subscription;
  constructor(
    private menuService: MenuService,
    private favService: FavouritesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.menuService.getMenu().subscribe(
      (res: any) => {
        const menu = res;
        const token = sessionStorage.getItem("jwtToken");
        if (token) {
          this.favService.getFavourites(token).subscribe(
            (resp: any) => {
              const favouriteMenuItemsId = resp.map(
                favouriteMenuItem => {
                  return favouriteMenuItem.id;
                }
              );

              this.menu = menu.map((menuItem: any) => {
                return {
                  ...menuItem,
                  isFavourite: favouriteMenuItemsId.indexOf(menuItem.id) >= 0
                };
              });
            },
            error => {
              this.menu = menu;
            }
          );
        } else {
          this.menu = menu;
        }
      },
      err => {
        err.error.msg;
      }
    );
  }

  handleCriteriaChange(criteria: string) {
    this.criteria = criteria;
  }

  addToFavourites() {
    this.menu.isFavourite = !this.menu.isFavourite;
  }
}
