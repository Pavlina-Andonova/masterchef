import { Component, OnInit } from "@angular/core";
import { OrdersService } from "./orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
