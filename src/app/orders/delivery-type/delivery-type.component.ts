import { Component, OnInit } from "@angular/core";
import { AddressesService } from "../../profile/addresses/addresses.service";
import { OrdersService } from "../orders.service";

@Component({
  selector: "app-delivery-type",
  templateUrl: "./delivery-type.component.html",
  styleUrls: ["./delivery-type.component.scss"]
})
export class DeliveryTypeComponent implements OnInit {
  profileAddresses: any;
  isHomeOptionsShown: boolean = true;
  isRestaurantOptionsShown: boolean = false;
  addressesPlaceholders:any;
  addressPlaceholder:any;
  selectedAddressId:any;
  constructor(private addressesService: AddressesService, private ordersService: OrdersService) {}

  ngOnInit() {
    this.addressesService.getAddresses().subscribe(res => {
      this.profileAddresses = res;
      console.log(this.profileAddresses);

       this.addressesPlaceholders = this.profileAddresses.map(address => {
         this.addressPlaceholder =
          address.city + ", " + address.street + ", " + address.number;
        return {
          id: address.id,
          placeholder: this.addressPlaceholder
        };
      });
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

  selectChangeHandler (event: any) {
    this.selectedAddressId = event.target.value;
    console.log(this.selectedAddressId);
    this.ordersService.setCurrentAddres(this.selectedAddressId);
  }
}
