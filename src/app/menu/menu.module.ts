import { NgModule } from "@angular/core";

import { MenuComponent } from "./menu.component";
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuListItemComponent } from './menu-list/menu-list-item/menu-list-item.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CommonModule } from "@angular/common";
import { MenuService } from "./menu.service";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    MenuListItemComponent,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [MenuService]

})
export class MenuModule {}
