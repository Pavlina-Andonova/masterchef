import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ValidationManager } from '../../../shared/Services/validation-manager';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit, OnChanges {
  addressForm: any;
  addressData: any;

  @Output() newAddress = new EventEmitter<any>();
  @Input() editedAddress;
  constructor() { }

  ngOnInit() {
    this.addressForm = new ValidationManager({
      city: '',
      district:'',
      number: '',
      buildingType: '',
      entry:'',
      floor:'',
      apartment:'',
    });
    if(this.editedAddress){
      console.log(this.editedAddress);
    }

    // this.addressForm.setValue({
    //   city: this.addressForm.formGroup.value,
    //   district:'',
    //   number: '',
    //   buildingType: '',
    //   entry:'',
    //   floor:'',
    //   apartment:'',
    // })
  }

  ngOnChanges(){
    
  }

  onSubmit() {
   this.addressData = this.addressForm.formGroup.value;
   this.newAddress.emit(this.addressData);
  }

}
