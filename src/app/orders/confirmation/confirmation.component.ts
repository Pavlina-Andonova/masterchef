import { Component, OnInit } from "@angular/core";
import { ValidationManager } from "ng2-validation-manager";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"]
})
export class ConfirmationComponent implements OnInit {
  paymentForm;
  orders;
  paymentMethod;
  address;
  final;

  errorMessage: string;
  constructor() {}

  ngOnInit() {
    this.paymentForm = new ValidationManager({
      payType: "",
      additionalInfo: ""
    });

    this.paymentForm.setValue({
      payType: "cash"
    });

    sessionStorage.setItem(
      "paymentMethod",
      JSON.stringify(this.paymentForm.formGroup.value)
    );

    const menuItems = JSON.parse(sessionStorage.getItem("orders"));
    if (!menuItems || menuItems.length <= 0) {
      this.errorMessage = "Your shopping bag is empty!";
      return;
    }

    const paymentMethod = JSON.parse(sessionStorage.getItem("paymentMethod"));
    if (!paymentMethod) {
      this.errorMessage = "Your have to choose a payment method!!";
      return;
    }

    const addressData = JSON.parse(sessionStorage.getItem("address"));
    if (!addressData || addressData.id <= 0) {
      this.errorMessage = "Your have to choose an address!";
      return;
    }

    this.final = {
      menuItems: menuItems,
      paymentMethod: paymentMethod.payType,
      totalPrice: +sessionStorage.getItem("total"),
      addressId: addressData.id
    };
  }

  onSubmit() {
    sessionStorage.setItem('paymentMethod', JSON.stringify(this.paymentForm.formGroup.value));
    console.log(this.paymentForm.formGroup.value);
  }
}
