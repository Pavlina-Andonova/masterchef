import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { MenuService } from "../menu.service";
import { FavouritesService } from "../../profile/favourites/favourites.service";

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.scss"]
})
export class MenuListComponent implements OnInit {
  menu: any;

  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private favService: FavouritesService
  ) {}

  ngOnInit() {
    this.menuService.getMenu().subscribe(
      (res: any) => {
        const menu = res;
        this.favService.getFavourites().subscribe(
          (resp: any) => {
            const favouriteMenuItemsId = resp.map(favouriteMenuItem => {
              return favouriteMenuItem.id;
            });

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
      },
      err => {
        err.error.msg;
      }
    );
  }
}
