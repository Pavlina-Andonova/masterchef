import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../menu.service';
import { OrdersService } from '../../../../orders/orders.service';

@Component({
  selector: 'app-menu-list-item-detail',
  templateUrl: './menu-list-item-detail.component.html',
  styleUrls: ['./menu-list-item-detail.component.scss']
})
export class MenuListItemDetailComponent implements OnInit {
  menuDetail: any;
  isReviewOpen: boolean = false;
  // menuItem;
  constructor(
    private route: ActivatedRoute,
    private menuSrevice: MenuService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.menuSrevice.getMenuItemById(params['id']).subscribe(res => {
        this.menuDetail = res;
        console.log(this.menuDetail);
      });
    });
  }

  onOrder() {
    this.ordersService.addMenuItem(this.menuDetail.id);
  }

  addReview() {
    this.isReviewOpen = !this.isReviewOpen;
  }
}
