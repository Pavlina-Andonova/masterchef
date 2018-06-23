import { Component, OnInit } from "@angular/core";
import { AddressesService } from "./addresses.service";

@Component({
  selector: "app-addresses",
  templateUrl: "./addresses.component.html",
  styleUrls: ["./addresses.component.scss"]
})
export class AddressesComponent implements OnInit {
  addresses;
  constructor(private addressesService: AddressesService) {}

  ngOnInit() {
    this.addressesService.getAddresses().subscribe(res => {
      this.addresses = res;
      this.addressesService.setAddress(res);
    });

    this.addressesService.onAddressesChanged.subscribe(addresses => {
      this.addresses = addresses;
    });
  }
}
