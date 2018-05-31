import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  isHomeOptionsShown: boolean = true;
  isRestaurantOptionsShown: boolean = false;
  constructor() {}

  ngOnInit() {}

  handleHomeOptions() {
    this.isHomeOptionsShown = true;

    if (this.isHomeOptionsShown = true) {
      this.isRestaurantOptionsShown = false;
    }
  }

  handleRestaourantOptions() {
    this.isRestaurantOptionsShown = true;

    if (this.isRestaurantOptionsShown = true) {
      this.isHomeOptionsShown = false;
    }
  }
}
