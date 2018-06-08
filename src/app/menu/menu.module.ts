import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';

import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuListItemComponent } from './menu-list/menu-list-item/menu-list-item.component';
import { MenuListItemDetailComponent } from './menu-list/menu-list-item/menu-list-item-detail/menu-list-item-detail.component';
import { MenuListEditComponent } from './menu-list-edit/menu-list-edit.component';
import { MenuListItemEditComponent } from './menu-list-edit/menu-list-item-edit/menu-list-item-edit.component';
import { MenuListItemAddComponent } from './menu-list-edit/menu-list-item-add/menu-list-item-add.component';




@NgModule({
  declarations: 
  [ 
    MenuComponent,
    MenuListComponent, 
    MenuListItemComponent, 
    MenuListItemDetailComponent, 
    MenuListEditComponent, 
    MenuListItemEditComponent, 
    MenuListItemAddComponent            
  ], 
  imports: 
  [
    CommonModule, 
    FormsModule, 
    SharedModule
  ],
  providers: [MenuService]
})
export class MenuModule {}
