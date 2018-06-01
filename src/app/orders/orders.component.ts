import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  number: number = 1;
  price = 10;
  result = this.price;
  isHomeOptionsShown: boolean = true;
  isRestaurantOptionsShown: boolean = false;
  constructor() {}

  ngOnInit() {}

  handleHomeOptions() {
    this.isHomeOptionsShown = true;

    if ((this.isHomeOptionsShown = true)) {
      this.isRestaurantOptionsShown = false;
    }
  }

  handleRestaourantOptions() {
    this.isRestaurantOptionsShown = true;

    if (this.isRestaurantOptionsShown = true) {
      this.isHomeOptionsShown = false;
    }
  }

  addItem() {
    this.number += 1;
    this.result = this.number * this.price;
  }

  removeItem() {
    this.number -= 1;
    this.result -= this.price;
    if (this.number < 1) {
      this.number = 0;
    }
    if (this.result < 1) {
      this.result = 0;
    }
  }

  deleteItem(){
    this.number = 0;
  }
}
