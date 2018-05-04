import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-item-detail',
  templateUrl: './menu-item-detail.component.html',
  styleUrls: ['./menu-item-detail.component.scss']
})
export class MenuItemDetailComponent implements OnInit {
  menuDetail: any;
  constructor(private route: ActivatedRoute, private menuSrevice: MenuService) {}
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.menuSrevice.getMenuItemById(params['id']).subscribe(
        res => {
          this.menuDetail = res; 
          console.log(res);
        }
      );
     });
  }
}


 


