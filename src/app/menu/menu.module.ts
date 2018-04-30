import { NgModule } from "@angular/core";

import { MenuComponent } from "./menu.component";
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuListItemComponent } from './menu-list/menu-list-item/menu-list-item.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    MenuListItemComponent,
    MenuItemComponent,
  

  ],
  imports: [
    CommonModule 

  ],
  providers: []

})
export class MenuModule {}
