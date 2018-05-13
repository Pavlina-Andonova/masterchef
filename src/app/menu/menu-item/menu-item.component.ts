import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  menu: any;
  criteria="";
  constructor(private menuService: MenuService) {}

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

  handleCriteriaChange(criteria:string){
   this.criteria = criteria;
  }

}
