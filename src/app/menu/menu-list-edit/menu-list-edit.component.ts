import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list-edit',
  templateUrl: './menu-list-edit.component.html',
  styleUrls: ['./menu-list-edit.component.scss']
})
export class MenuListEditComponent implements OnInit {
  menuList: any;
  
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe(
      res => {
        this.menuList = res;
      },
      err => {
        err.error.msg;
      }
    );
  }

  handleNewMenuItem(menuItemData: any){
    console.log(menuItemData);
    this.menuList.unshift(menuItemData);
  }

}
