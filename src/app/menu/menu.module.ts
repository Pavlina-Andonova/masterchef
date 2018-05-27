import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';

import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuListItemComponent } from './menu-list/menu-list-item/menu-list-item.component';
import { MenuListItemDetailComponent } from './menu-list/menu-list-item/menu-list-item-detail/menu-list-item-detail.component';


@NgModule({
  declarations: [MenuComponent,MenuListComponent, MenuListItemComponent, MenuListItemDetailComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [MenuService]
})
export class MenuModule {}
