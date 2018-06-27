import { Component, Output, EventEmitter, HostListener } from "@angular/core";

import { Subscription } from "rxjs/Subscription";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { OrdersService } from "../orders/orders.service";
import { MenuService } from "../menu/menu.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  host: {
    "(window:scroll)": "onScroll($event)"
  }
})
export class HeaderComponent {
  orderItemsCount: number;
  subscription: Subscription;
  orderSubscription: Subscription;
  isUserAuthenticated: boolean;
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;
  profileImg;
  @Output() getSigninModalStateChange = new EventEmitter<boolean>();
  @Output() getSignupModalStateChange = new EventEmitter<boolean>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.isUserAuthenticated = this.authService.checkIfUserIsAuthenticated();
    this.subscription = this.authService.userAuthenticationChanged.subscribe(
      (user: any) => {
        this.isUserAuthenticated = !!user;
        if (user) {
          this.profileImg = user.profileImage;
        }
      }
    );

    this.orderItemsCount = this.ordersService.getOrderItemsCount();
    this.orderSubscription = this.ordersService.orderItemsCountChanged.subscribe(
      (count: number) => {
        this.orderItemsCount = count;
      }
    );
  }

  onLogout() {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("orders");
    sessionStorage.removeItem("paymentMethod");
    this.authService.setIsUserAuthenticated(null);
    this.router.navigate(["/"]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openSignupModal() {
    this.getSignupModalStateChange.emit(true);
  }

  openSigninModal() {
    this.getSigninModalStateChange.emit(true);
  }

  //window object can be wrapper in a service but for now we directly use it
  onScroll(evt) {
    this.currPos =
      (window.pageYOffset || evt.target.scrollTop) -
      (evt.target.clientTop || 0);
    if (this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
