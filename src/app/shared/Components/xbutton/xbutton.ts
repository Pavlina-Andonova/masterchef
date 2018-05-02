import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'xbutton',
    templateUrl: './xbutton.html',
    styleUrls: ['./xbutton.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class XButton {
    @Input() type="submit";

}