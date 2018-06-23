import { Component, OnInit } from "@angular/core";
import { AddressesService } from "../../profile/addresses/addresses.service";

@Component({
  selector: "app-delivery-type",
  templateUrl: "./delivery-type.component.html",
  styleUrls: ["./delivery-type.component.scss"]
})
export class DeliveryTypeComponent implements OnInit {
  profileAddresses: any;
  isHomeOptionsShown: boolean = true;
  isRestaurantOptionsShown: boolean = false;

  constructor(private addressesService: AddressesService) {}

  ngOnInit() {
    this.addressesService.getAddresses().subscribe(res => {
      this.profileAddresses = res;
      console.log(this.profileAddresses);
    });
  }

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
