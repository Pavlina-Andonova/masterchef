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

  ngOnInit() {
    this.setOrders();
  }

  setOrders() {
    this.ordersService.getOrderItems().subscribe(items => {
      this.ordersList = items;
    });
  }

  handleUpdatedMenuItem(){
    this.setOrders();
  }
}
