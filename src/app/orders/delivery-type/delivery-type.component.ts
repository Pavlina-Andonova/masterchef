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
  restaurantAddresses: any;
  isRestaurantOptionsShown: boolean = false;
  addressesPlaceholders: any;
  restaurantsPlaceholder: any;
  restaurantPlaceholder: any;
  selectedAddress: any;
  constructor(
    private addressesService: AddressesService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    /*Home addresses*/

    this.addressesService.getAddresses().subscribe(res => {
      this.profileAddresses = res;
      // console.log(this.profileAddresses);

      this.addressesPlaceholders = this.profileAddresses.map(address => {
        const addressPlaceholder =
        address.city + ", " + address.street + ", " + address.number;
        return {
          id: +address.id,
          placeholder: addressPlaceholder
        };
      });
      console.log("adresses");
      console.log(this.addressesPlaceholders);

      if (this.selectedAddress === 0) {
        this.selectedAddress = { id: 0, isRestaurant: true };
        this.isRestaurantOptionsShown = true;
      } else {
        this.selectedAddress = JSON.parse(sessionStorage.getItem("address"));

        if (!this.selectedAddress) {
          if (this.addressesPlaceholders.length > 0) {
            this.selectedAddress = {
              id: +this.addressesPlaceholders[0].id,
              isRestaurant: false
            };
          }
          this.selectedAddress = { id: 0, isRestaurant: false };
          this.isRestaurantOptionsShown = false;
        } else {
          this.isRestaurantOptionsShown = this.selectedAddress.isRestaurant;
        }
      }
    });

    /*Restaurant adresses*/
    this.addressesService.getRestaurants().subscribe(res => {
      this.restaurantAddresses = res;

      this.restaurantsPlaceholder = this.restaurantAddresses.map(address => {
        this.restaurantPlaceholder =
          address.city + ", " + address.street + ", " + address.number;
        return {
          id: +address.id,
          placeholder: this.restaurantPlaceholder
        };
      });
    });
  }

  handleHomeOptions() {
    this.isRestaurantOptionsShown = false;
  }

  handleRestaourantOptions() {
    this.isRestaurantOptionsShown = true;
  }

  selectChangeHandler(event: any) {
    const id = event.target.value;
    // this.ordersService.setCurrentAddress(this.selectedAddressId);
    this.selectedAddress = {
      id: id,
      isRestaurant: false
    };
    sessionStorage.setItem("address", JSON.stringify(this.selectedAddress));
    console.log(this.selectedAddress);
  }

  selectRestaurant(event: any) {
    const id = event.target.value;
    // this.ordersService.setCurrentAddress(this.selectedAddressId);
    this.selectedAddress = {
      id: id,
      isRestaurant: true
    };
    sessionStorage.setItem("address", JSON.stringify(this.selectedAddress));
    console.log(this.selectedAddress);
  }
}
