import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {

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
