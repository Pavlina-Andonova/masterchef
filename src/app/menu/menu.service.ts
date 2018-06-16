import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";

@Injectable()
export class MenuService {
  categories: string[] = [];
  currentCategory: string;
  currentCategoryChanged = new Subject<string>();
  categoriesChanged = new Subject<any>();
  constructor(private http: HttpClient) {}

  createMenuItem(menuItemData) {
    return this.http.post("/api/menuItem", menuItemData);
  }

  updateMenuItem(menuItemData) {
    return this.http.put("/api/menuItem/" + menuItemData.id, menuItemData);
  }

  getMenu() {
    return this.http.get("/api/menu");
  }

  getMenuItemById(id: number) {
    return this.http.get("/api/menuItem/" + id);
  }

  deleteMenuItemById(id: number) {
    return this.http.delete("api/menuItem/" + id);
  }

  getFavourites() {
    return this.http.get("/api/favourites/add");
  }

  getCategories() {
    return this.categories;
  }

  setCategories(categories: any) {
    this.categories = Array.from(categories);
    
    if (!this.currentCategory) {
      this.setCurrentCategory(this.categories[0]);
    }

    this.categoriesChanged.next(this.categories);
  }

  getCurrentCategory() {
    return this.currentCategory;
  }

  setCurrentCategory(category: string) {
    this.currentCategory = category;
    this.currentCategoryChanged.next(this.currentCategory);
  }
}
