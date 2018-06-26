import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../orders.service";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  ordersList: any = [];
  constructor(private ordersService: OrdersService) {}
  total: number = 0;
  orders;

  ngOnInit() {
    this.setOrders();
    this.total = +sessionStorage.getItem("total");
    this.orders = sessionStorage.getItem("orders");
  }

  setOrders() {
    this.ordersService.getOrderItems().subscribe(items => {
      this.ordersList = items;
      this.total=0;
      this.ordersList.forEach(element => {
        this.total += element.count * element.price;
        sessionStorage.setItem("total",  JSON.stringify(this.total));
      });

      this.total.toFixed(2);
    });
  }

  handleUpdatedMenuItem() {
    this.setOrders();
  }
}
