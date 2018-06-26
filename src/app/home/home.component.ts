import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuCategories;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenuCategories().subscribe(res => {
      this.menuCategories = res;
    });
  }
}
