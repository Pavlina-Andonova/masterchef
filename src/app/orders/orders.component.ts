import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  showHome: boolean = true;
  showRestaurant: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handleHomeOptions(){
    this.showHome = !this.showHome;
    if(this.showRestaurant === true) {
      this.showRestaurant = !this.showRestaurant;
    }
  }

  handleRestaurantOptions() {
    this.showRestaurant = !this.showRestaurant;
    if(this.showHome === true) {
      this.showHome = !this.showHome;
    }
  }

}
