import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ValidationManager } from '../../shared/Services/validation-manager';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() getSignupModalStateChange = new EventEmitter<boolean>();
  isModal = true;

  form: any;
  data: any;
  message = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new ValidationManager({
      email: 'required|email',
      password: 'required|rangeLength:4,15',
      confirmPassword: 'required|equalTo:password'
    });
  }

  signup() {
    let userData = { ...this.form.formGroup.value };
    delete userData.confirmPassword;

    this.authService.registerUser(userData).subscribe(
      resp => {
        this.data = resp;
        sessionStorage.setItem('jwtToken', this.data.token);
        this.authService.setIsUserAuthenticated(resp);
        this.router.navigate(['']);
        this.isModal = false;
        this.getSignupModalStateChange.emit(false);
      },
      err => {
        this.message = err.error.msg;
        this.authService.setIsUserAuthenticated(null);
      }
    );
  }

  handleCloseModal(isModalClosed) {
    isModalClosed && this.getSignupModalStateChange.emit(false);
  }
}
