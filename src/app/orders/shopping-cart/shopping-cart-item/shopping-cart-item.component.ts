import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { OrdersService } from "../../orders.service";

@Component({
  selector: "app-shopping-cart-item",
  templateUrl: "./shopping-cart-item.component.html",
  styleUrls: ["./shopping-cart-item.component.scss"],
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          transform: "translateX(0)",
          opacity: 1
        })
      ),
      state(
        "fade",
        style({
          transform: "translateX(70%)",
          opacity: 0
        })
      ),
      transition("normal => fade", animate(400))
    ])
  ]
})
export class ShoppingCartItemComponent implements OnInit {
  state = "normal";
  shoppingBagItems;
  count;
  @Input() item;
  @Output() menuItemChanged = new EventEmitter<number>();

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
   this.shoppingBagItems = JSON.parse(sessionStorage.getItem('orders'));
   this.count = this.shoppingBagItems.map( item => item.count);
  }

  addItem(id: number) {
    this.ordersService.addMenuItem(id);
    this.menuItemChanged.emit(id);
  }

  removeItem(id: number) {
    this.ordersService.removeMenuItem(id);
    this.menuItemChanged.emit(id);
  }

  deleteItem(id: number) {
    this.state == "normal" ? (this.state = "fade") : (this.state = "normal");
    this.ordersService.deleteItem(id);
    this.menuItemChanged.emit(id);
  }
}
