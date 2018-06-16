import { Component, OnInit } from "@angular/core";
import { MenuService } from "./menu.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  listFilter;
  currentCategory: string;
  categories: any;
  categoriesSubscription: Subscription;
  currentCategorySubscription: Subscription;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.categories = this.menuService.getCategories();
    this.currentCategory = this.menuService.getCurrentCategory();

    this.categoriesSubscription = this.menuService.categoriesChanged.subscribe(
      categories => {
        this.categories = categories;
      }
    );

    this.currentCategorySubscription = this.menuService.currentCategoryChanged.subscribe(
      category => {
        this.currentCategory = category;
      }
    );
  }

  onSelect(category) {
    this.menuService.setCurrentCategory(category);
  }
}
