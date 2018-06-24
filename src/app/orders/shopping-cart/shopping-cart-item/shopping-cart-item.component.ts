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
      transition("normal => fade", animate(1000))
    ])
  ]
})
export class ShoppingCartItemComponent implements OnInit {
  state = "normal";
  @Input() item;
  @Output() menuItemChanged = new EventEmitter<number>();

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    console.log('item')
    console.log(this.item)
    sessionStorage.getItem('orders');
  }

  addItem(id: number) {
    this.ordersService.addMenuItem(id);
    this.menuItemChanged.emit(id);
    console.log(this.menuItemChanged)
  }

  removeItem(id: number) {
    this.ordersService.removeMenuItem(id);
    this.menuItemChanged.emit(id);
  }

  deleteItem(id: number) {
    this.ordersService.deleteItem(id);
    this.state == "normal" ? (this.state = "fade") : (this.state = "normal");
    this.menuItemChanged.emit(id);
  }
}
