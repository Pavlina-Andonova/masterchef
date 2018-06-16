import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ValidationManager } from "../../../shared/Services/validation-manager";

@Component({
  selector: "app-single-address",
  templateUrl: "./single-address.component.html",
  styleUrls: ["./single-address.component.scss"]
})
export class SingleAddressComponent implements OnInit {
  @Input() singleAddress;
  isEditing: boolean = false;
  editAddressForm;
  constructor() {}

  ngOnInit() {
    this.editAddressForm = new ValidationManager({
      city: "required",
      district: "required",
      buildingType: "required",
      number: "required",
      entry: "",
      floor: "required",
      apartment: ""
    });
  }

  onEdit() {
    this.isEditing = !this.isEditing;

    if (this.isEditing) {
      this.editAddressForm.setValue(this.singleAddress);
    }
  }

  onSave() {
    this.singleAddress = this.editAddressForm.formGroup.value;
    this.isEditing = false;
  }
}
