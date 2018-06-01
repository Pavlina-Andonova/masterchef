import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders.component';
import { OrderedItemComponent } from './ordered-item/ordered-item.component';



@NgModule({
  declarations: [OrdersComponent, OrderedItemComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: []
})
export class OrdersModule {}
