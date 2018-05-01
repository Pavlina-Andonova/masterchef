import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'xinput',
    styleUrls: ['./xinput.scss'],
    templateUrl: './xinput.html',
    encapsulation: ViewEncapsulation.None
})
export class XInput implements OnInit {

    ctrl: any;
    @Input() name: string;
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() type: string = 'text';
    @Input() id: string;
    @Input() form: any = {};
    @Input() labelClass = '';
    @Input() maxLenght: number = 9999;
    @Input() disabled: boolean = false;

    ngOnInit() {
        this.id = this.id || 'form-' + this.name;
    }

    ngOnChanges(changes) {
        this.ctrl = this.form && this.form.formGroup.controls[this.name] || {};
        // console.log(changes, this.ctrl);
        if (_.get(changes, 'disabled.currentValue') === true) {
            this.ctrl.disable && this.ctrl.disable();
        } else {
            this.ctrl.enable && this.ctrl.enable();
        }
    }
}