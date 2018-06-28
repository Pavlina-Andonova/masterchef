import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../menu.service';
import { OrdersService } from '../../../../orders/orders.service';
import { ValidationManager } from 'ng2-validation-manager';

@Component({
  selector: 'app-menu-list-item-detail',
  templateUrl: './menu-list-item-detail.component.html',
  styleUrls: ['./menu-list-item-detail.component.scss']
})
export class MenuListItemDetailComponent implements OnInit {
  menuDetail: any;
  reviewForm;
  isReviewOpen: boolean = false;
  reviewsData;
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
        console.log('this.menuDetail.id');
        console.log(this.menuDetail.id);
      });
    });

    this.reviewForm = new ValidationManager({
      reviewText: 'required'
    });

    this.menuSrevice.getReviews().subscribe(res => {
      this.reviewsData = res;
      console.log('this.reviewsData');
      console.log(this.reviewsData);
    });
  }

  onOrder() {
    this.ordersService.addMenuItem(this.menuDetail.id);
  }

  addReview() {
    this.isReviewOpen = !this.isReviewOpen;
  }

  submitReview() {
    this.reviewForm.setValue({
      reviewText: this.reviewForm.formGroup.value.reviewText
    });

    this.menuSrevice
      .createReview({
        ...this.reviewForm.formGroup.value,
        date: new Date()
          .toISOString()
          .slice(0, 19)
          .replace('T', ' '),
        menuItemId: this.menuDetail.id
      })
      .subscribe(res => {
        console.log(res);
      });

    this.reviewForm.reset();
  }
}
