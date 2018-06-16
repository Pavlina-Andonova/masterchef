import {Component,OnInit} from "@angular/core";
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
  styleUrls: ["./shopping-cart.component.scss"],
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
export class ShoppingCartComponent implements OnInit {
  state = "normal";
  ordersList: any = [];
  
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.setOrders();
  }

  setOrders() {
    this.ordersService.getOrderItems().subscribe(items => {
      this.ordersList = items;
      console.log(items);
    });
  }

  addItem(id: number) {
    this.ordersService.addMenuItem(id);
    this.setOrders();
  }

  removeItem(id:number) {
   this.ordersService.removeMenuItem(id);
   this.setOrders();
   this.state == 'normal' ? (this.state = 'fade') : (this.state = 'normal');
  }

  deleteItem(id: number) {
    this.ordersService.deleteItem(id);
    this.setOrders();
    this.state == 'normal' ? (this.state = 'fade') : (this.state = 'normal');
  }


}
