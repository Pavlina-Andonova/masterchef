import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs/Subject";

@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) {}

  orderItemsCountChanged = new Subject<number>();
  currentOrders: any[] = [];
  currentAddressId:number;

  setHeader() {
    return {
      headers: new HttpHeaders({
        Authorization: sessionStorage.getItem("jwtToken")
      })
    };
  }
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
    sessionStorage.setItem("orders", JSON.stringify(this.currentOrders));
    this.orderItemsCountChanged.next(this.getOrderItemsCount());
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
    sessionStorage.setItem("orders", JSON.stringify(this.currentOrders));
    this.orderItemsCountChanged.next(this.getOrderItemsCount());
  }

  deleteItem(id: number) {
    this.currentOrders = this.currentOrders.filter(order => order.id !== id);
    this.orderItemsCountChanged.next(this.getOrderItemsCount());
    sessionStorage.removeItem("orders");
  }

  getOrderItems() {
    return this.http.post("/api/menu/group", {
      menuItems: this.currentOrders
    });
  }

  getOrderItemsCount() {
    let allOrders = 0;
    this.currentOrders.forEach(order => {
      allOrders += order.count;
    });
    return allOrders;
  }

  setCurrentAddress(id){
    this.currentAddressId = id;

  }
}
