import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-addresses",
  templateUrl: "./addresses.component.html",
  styleUrls: ["./addresses.component.scss"]
})
export class AddressesComponent implements OnInit {
  addresses=[];
  editedAddress:any;
  constructor() {}

  ngOnInit() {}

  handleNewAddress(addressData) {
    this.addresses.push(addressData);
  }

  handleEdittedAddress(edittedAddress){
    this.editedAddress = edittedAddress;
  }
}
