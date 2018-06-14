import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {
  constructor(private http: HttpClient) {}

  createMenuItem(menuItemData) {
    return this.http.post("/api/menuItem" , menuItemData);
  }

  updateMenuItem(menuItemData) {
    return this.http.put('/api/menuItem/' + menuItemData.id, menuItemData);
  }

  getMenu() {
    return this.http.get('/api/menu');
  }

  getMenuItemById(id: number) {
    return this.http.get('/api/menuItem/' + id);
  }

  deleteMenuItemById(id: number){
    return this.http.delete('api/menuItem/' + id)
  }

  getFavourites() {
    return this.http.get('/api/favourites/add');
  }

}
