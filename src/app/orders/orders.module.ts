import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders.component';
import { DeliveryTypeComponent } from './delivery-type/delivery-type.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersService } from './orders.service';


@NgModule({
  declarations: [OrdersComponent, DeliveryTypeComponent, ConfirmationComponent, ShoppingCartComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [OrdersService]
})
export class OrdersModule {}
