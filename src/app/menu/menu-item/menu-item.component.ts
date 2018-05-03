import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  menu: any;
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

  // menu = [
  //   {
  //     title: 'Salad',
  //     description: 'Description goes here...',
  //     price: 7.0,
  //     weight: 350
  //   },
  //   {
  //     title: 'Salad 1',
  //     description: 'Description goes here...',
  //     price: 7.0,
  //     weight: 350
  //   },
  //   {
  //     title: 'Salad 2',
  //     description: 'Description goes here...',
  //     price: 7.0,
  //     weight: 350
  //   },
  //   {
  //     title: 'Salad',
  //     description: 'Description goes here...',
  //     price: 7.0,
  //     weight: 350
  //   },
  //   {
  //     title: 'Salad 1',
  //     description: 'Description goes here...',
  //     price: 7.0,
  //     weight: 350
  //   },
  //   {
  //     title: 'Salad 2',
  //     description: 'Description goes here...',
  //     price: 7.0,
  //     weight: 350
  //   },
  //   {
  //     title: 'Salad',
  //     description: 'Description goes here...',
  //     price: 7.0,
  //     weight: 350
  //   },
  //   {
  //     title: 'Salad 1',
  //     description: 'Description goes here...',
  //     price: 7.0,
  //     weight: 350
  //   },
  //   {
  //     title: 'Salad 2',
  //     description: 'Description goes here...',
  //     price: 7.0,
  //     weight: 350
  //   }
  // ];
}
