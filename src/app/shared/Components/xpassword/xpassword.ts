import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "xpassword",
  styleUrls: ["./xpassword.scss"],
  templateUrl: "./xpassword.html",
  encapsulation: ViewEncapsulation.None
})
export class XPassword implements OnInit {
  ctrl: any;
  @Input() name: string;
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "password";
  @Input() id: string;
  @Input() form: any = {};
  @Input() labelClass = "";
  @Input() maxLenght: number = 9999;
  @Input() disabled: boolean = false;
  @Input() showFeedback: boolean = false;

  ngOnInit() {
    this.id = this.id || "form-" + this.name;
  }

  ngOnChanges(changes) {
    this.ctrl = (this.form && this.form.formGroup.controls[this.name]) || {};
    // console.log(changes, this.ctrl);
    if (_.get(changes, "disabled.currentValue") === true) {
      this.ctrl.disable && this.ctrl.disable();
    } else {
      this.ctrl.enable && this.ctrl.enable();
    }
  }
}