import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { FlipCardComponent } from "./Components/flip-card/flip-card.component";



@NgModule({
  declarations: [
    FlipCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports:[
      FlipCardComponent
  ]
})
export class SharedModule {}
