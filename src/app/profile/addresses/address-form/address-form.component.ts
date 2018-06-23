import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ValidationManager } from "../../../shared/Services/validation-manager";
import { AddressesService } from "../addresses.service";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.scss"]
})
export class AddressFormComponent implements OnInit {
  selectedBuildingType: string = "house";
  addressForm: any;
  addressData: any;
  @Output() newAddress = new EventEmitter<any>();
  @Input() editedAddress;

  constructor(private addressesService: AddressesService) {}

  ngOnInit() {
    this.addressForm = new ValidationManager({
      city: "",
      street: "",
      number: "",
      buildingType: "",
      entry: "",
      floor: "",
      apartment: ""
    });

    this.addressForm.setValue({
      entry: "",
      floor: "",
      apartment: ""
    });
  }

  onSubmit() {
    this.addressData = this.addressForm.formGroup.value;
    const formData = {
      ...this.addressData,
      floor: +this.addressData.floor,
      number: +this.addressData.number
    };

    this.addressData = this.addressesService.addAddress(formData);
    this.addressForm.reset();
  }
}
