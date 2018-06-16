import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) {}

  currentOrders: any[] = [];

  count: number = 0;

  addMenuItem(id: number) {
    const existedMenuItems = this.currentOrders.filter(
      order => order.id === id
    );

    if (existedMenuItems.length === 0) {
      this.currentOrders.push({
        id: id,
        count: 1
      });
    } else {
      this.currentOrders.map(order => {
        if (id === order.id) {
          order.count += 1;
        }
        return order;
      });
    }
  }

  removeMenuItem(id: number) {
    const existedMenuItems = this.currentOrders.filter(
      order => order.id === id
    );
    if (existedMenuItems.length === 0) {
      this.deleteItem(id);
    } else {
      this.currentOrders.map(order => {
        if (id === order.id) {
          order.count -= 1;
          if (order.count < 1) {
            this.deleteItem(id);
          }
        }
        return order;
      });
    }
  }

  deleteItem(id: number) {
    this.currentOrders = this.currentOrders.filter(order => order.id !== id);
  }

  getOrderItems() {
    return this.http.post("/api/menu/group", {
      menuItems: this.currentOrders
    });
  }
}
