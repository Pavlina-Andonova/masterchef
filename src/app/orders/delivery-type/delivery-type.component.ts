import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.scss']
})
export class DeliveryTypeComponent implements OnInit {
  
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

    if ((this.isRestaurantOptionsShown = true)) {
      this.isHomeOptionsShown = false;
    }
  }
}
