import { Component, OnInit } from "@angular/core";
import { MenuService } from "./menu.service";
import { Subscription } from "rxjs/Subscription";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  listFilter;
  currentUser;
  currentCategory: string;
  categories: any;
  categoriesSubscription: Subscription;
  currentCategorySubscription: Subscription;
  userSubscription: Subscription;
  isUserAdmin:boolean;
  constructor(
    private menuService: MenuService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.menuService.getMenuCategories().subscribe(res => {
      this.categories = res;
      this.menuService.setCategories(res);
      this.currentCategory = this.menuService.getCurrentCategory();
    });

    this.menuService.currentCategoryChanged.subscribe((newCategory: string) => {
      this.currentCategory = newCategory;
    });

    this.currentUser = this.authService.getCurrentUser();

    this.userSubscription = this.authService.userAuthenticationChanged.subscribe(
      (user: any) => {
        this.currentUser = user;
      }
    );
  }

  onSelect(categoryType: string) {
    this.menuService.setCurrentCategory(categoryType);
  }
}
