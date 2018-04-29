import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { MenuComponent } from "./menu/menu.component";

import { MenuService } from "./menu.service";


@NgModule({
  declarations: [MenuComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  providers: [MenuService]
})
export class MenuModule {}
