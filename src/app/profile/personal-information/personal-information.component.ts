import { Component, OnInit } from '@angular/core';
import { ValidationManager } from '../../shared/Services/validation-manager';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  profileForm: any;
  constructor() { }

  ngOnInit() {
  //   this.profileForm = new ValidationManager({
  //     firstName: "required",
  //     lastName: "required",
  //     email: "required",
  //     currentPassword: "required",
  //     newPassword: "required",
  //     repPassword: "required"
  //   });

  //   this.profileForm.setValue({
  //     firstName: this.profileForm.firstName,
  //     lastName: this.profileForm.lastName,
  //     email: this.profileForm.email
  //   });
  }

}
