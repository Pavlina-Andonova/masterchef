import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "popup-close-button",
  templateUrl: "./popup-close-button.html",
  styleUrls: ["./popup-close-button.scss"]
})
export class PopupCloseButton {
  @Output() getCloseButtonStateChange = new EventEmitter<boolean>();

  triggerClose() {
    this.getCloseButtonStateChange.emit(true);
  }
}
