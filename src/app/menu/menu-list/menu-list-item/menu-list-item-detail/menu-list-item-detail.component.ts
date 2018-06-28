import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuService } from "../../../menu.service";
import { OrdersService } from "../../../../orders/orders.service";
import { ValidationManager } from "ng2-validation-manager";

@Component({
  selector: "app-menu-list-item-detail",
  templateUrl: "./menu-list-item-detail.component.html",
  styleUrls: ["./menu-list-item-detail.component.scss"]
})
export class MenuListItemDetailComponent implements OnInit {
  menuDetail: any;
  reviewForm;
  isReviewOpen: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private menuSrevice: MenuService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData(+params["id"]);
    });

    this.reviewForm = new ValidationManager({
      reviewText: "required"
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
          .replace("T", " "),
        menuItemId: this.menuDetail.id
      })
      .subscribe(res => {
        this.loadData(this.menuDetail.id);
      });

    this.reviewForm.reset();
  }

  loadData(menuItemId: number) {
    this.menuSrevice.getMenuItemById(menuItemId).subscribe((res: any) => {
      res.reviews = res.reviews.sort(function(a, b) {
        return b.id - a.id;
      });
      this.menuDetail = res;
    });
  }
}
