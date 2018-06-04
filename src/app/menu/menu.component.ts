import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  listFilter;
  // menu: any;
  // constructor(private menuService: MenuService) {}

  ngOnInit() {}

  // filterBy(filter: string) {
  //   switch (filter) {
  //     case 'salad':
  //       this.menu = this.menu.filter(menu => {
  //         return menu.type.toLowerCase().includes('salad');
  //       });
  //       console.log(this.menu);

  //     case 'pizza':
  //       this.menu = this.menu.filter(menu => {
  //         return menu.type.toLowerCase().includes('pizza');
  //       });
  //       console.log(this.menu);
  //   }
  // }
}
