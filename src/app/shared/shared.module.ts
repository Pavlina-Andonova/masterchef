import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import * as _ from "lodash";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api

import {
  AutoCompleteModule,
  ButtonModule,
  CalendarModule,
  CaptchaModule,
  CheckboxModule,
  ColorPickerModule,
  DropdownModule,
  FieldsetModule,
  FileUploadModule,
  InplaceModule,
  InputMaskModule,
  InputTextModule,
  InputSwitchModule,
  InputTextareaModule,
  MultiSelectModule,
  PasswordModule,
  ProgressBarModule,
  ProgressSpinnerModule,
  SpinnerModule,
  RadioButtonModule,
  RatingModule,
  SplitButtonModule,
  SelectButtonModule,
  TriStateCheckboxModule,
  ToggleButtonModule,
  EditorModule,
} from "./prime";

import { FlipCardComponent } from "./Components/flip-card/flip-card.component";
import { XInput } from "./Components/xinput/xinput";
import { XPassword } from "./Components/xpassword/xpassword";
import { XButton } from "./Components/xbutton/xbutton";
import { PopupCloseButton } from "./Components/popup-close-button/popup-close-button";
import { SearchComponent } from "./Components/search/search.component";
import { PopupComponent } from './Components/popup/popup.component';
import { FavouriteComponent } from "./Components/favourite/favourite.component";
import { CustomButtonGoldenrodComponent } from './Components/custom-button-goldenrod/custom-button-goldenrod.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { FilterPipe } from './pipe/filter.pipe'
import { SplitPipe } from "./pipe/split.pipe";
import { NoResultsComponent } from './Components/no-results/no-results.component';


@NgModule({
  declarations: [
    SplitPipe,
    FlipCardComponent, 
    XInput, 
    XPassword, 
    XButton, 
    PopupCloseButton, 
    SearchComponent, 
    PopupComponent, 
    PopupComponent, 
    FavouriteComponent,
    CustomButtonGoldenrodComponent,
    SpinnerComponent,
    FilterPipe,
    NoResultsComponent,
      
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    ButtonModule,
    CalendarModule,
    CaptchaModule,
    CheckboxModule,
    ColorPickerModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    InplaceModule,
    InputMaskModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    MultiSelectModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    SpinnerModule,
    RadioButtonModule,
    RatingModule,
    SplitButtonModule,
    SelectButtonModule,
    TriStateCheckboxModule,
    ToggleButtonModule,
    EditorModule,
    BrowserAnimationsModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    CaptchaModule,
    CheckboxModule,
    ColorPickerModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    InplaceModule,
    InputMaskModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    MultiSelectModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    SpinnerModule,
    RadioButtonModule,
    RatingModule,
    SplitButtonModule,
    SelectButtonModule,
    TriStateCheckboxModule,
    ToggleButtonModule,
    EditorModule,
    FlipCardComponent,
    XInput,
    XPassword,
    XButton,
    PopupCloseButton,
    SplitPipe,
    SearchComponent,
    FilterPipe,
    PopupComponent,
    FavouriteComponent,
    CustomButtonGoldenrodComponent,
    SpinnerComponent,
    NoResultsComponent,
    

  ]
})
export class SharedModule {}
