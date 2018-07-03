import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.scss']
})
export class ProfileOrdersComponent implements OnInit {
orders;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getUserOders().subscribe(
      res => {
        this.orders = res;
        console.log(this.orders);
      }
    )
  }

}
