import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-list-item-edit',
  templateUrl: './menu-list-item-edit.component.html',
  styleUrls: ['./menu-list-item-edit.component.scss']
})
export class MenuListItemEditComponent implements OnInit {
  menu: any;

  criteria = '';
  constructor(
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.menuService.getMenu().subscribe(
      res => {
        this.menu = res;
      },
      err => {
        err.error.msg;
      }
    );
  }

}
