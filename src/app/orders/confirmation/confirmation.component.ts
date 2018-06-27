import { Component, OnInit } from "@angular/core";
import { ValidationManager } from "ng2-validation-manager";
import { OrdersService } from "../orders.service";

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
  constructor(private ordersService: OrdersService) {}

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
      totalPrice: sessionStorage.getItem("total"),
      addressId: +addressData.id,
      orderDate: new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
    };
  }

  onSubmit() {
    this.final = {
      ...this.final,
      paymentMethod: this.paymentForm.formGroup.value.paymentMethod || this.final.paymentMethod,
      additionalInfo: this.paymentForm.formGroup.value.additionalInfo || ''
    };

    this.ordersService.createOrder(this.final).subscribe(res => {
      sessionStorage.removeItem("orders");
      sessionStorage.removeItem("paymentMethod");
      sessionStorage.removeItem("total");
      sessionStorage.removeItem("address");
    });
  }
}
