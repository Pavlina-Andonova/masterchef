import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthService } from './auth.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from './auth-guard.service';




@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    SharedModule
  ],
  exports: [SigninComponent, SignupComponent],
  providers: [AuthService, AuthGuardService]
})
export class AuthModule {}
