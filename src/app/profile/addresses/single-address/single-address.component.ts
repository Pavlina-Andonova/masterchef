import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ValidationManager } from "ng2-validation-manager";
import { AddressesService } from "../addresses.service";

@Component({
  selector: "app-single-address",
  templateUrl: "./single-address.component.html",
  styleUrls: ["./single-address.component.scss"]
})
export class SingleAddressComponent implements OnInit {
  @Input() singleAddress;
  isEditing: boolean = false;
  editAddressForm;
  constructor(private addressesService: AddressesService) {}

  ngOnInit() {
    this.editAddressForm = new ValidationManager({
      city: "required",
      street: "required",
      buildingType: "required",
      number: "required",
      entry: "",
      floor: "required",
      apartment: ""
    });

    this.editAddressForm.setValue({
      ...this.singleAddress,
      entry: this.singleAddress.entry || '',
      apartment: this.singleAddress.apartment || ''
    });
  }

  onEdit() {
    this.isEditing = true;
  }

  onDelete() {
    this.addressesService.deleteAddressById(this.singleAddress.id);
  }

  onSave() {
    const formData = {
      ...this.editAddressForm.formGroup.value,
      floor: +this.editAddressForm.formGroup.value.floor,
      number: +this.editAddressForm.formGroup.value.number
    };
    this.addressesService.updateAddress(this.singleAddress.id, formData);
    this.isEditing = false;
  }
}
