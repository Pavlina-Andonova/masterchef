import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-single-address",
  templateUrl: "./single-address.component.html",
  styleUrls: ["./single-address.component.scss"]
})
export class SingleAddressComponent implements OnInit {
  @Input() singleAddress;
  @Output() editedAddress = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {
   
  }

  onEdit(){
    this.editedAddress.emit(this.singleAddress);
  }
}
