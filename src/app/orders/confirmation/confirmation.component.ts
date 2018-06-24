import { Component, OnInit } from "@angular/core";
import { ValidationManager } from "ng2-validation-manager";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"]
})
export class ConfirmationComponent implements OnInit {
  paymentForm;
  constructor() {}

  ngOnInit() {
    this.paymentForm = new ValidationManager({
      payType: "",
      additionalInfo: ""
    });

    this.paymentForm.setValue({
      payType: "cash"
    });
  }

  onSubmit() {
    console.log(this.paymentForm.formGroup.value);
    sessionStorage.setItem(
      "paymentMethod",
      JSON.stringify(this.paymentForm.formGroup.value)
    );
  }
}
