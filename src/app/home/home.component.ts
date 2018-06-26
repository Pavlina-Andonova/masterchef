import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuCategories;
  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit() {
    this.menuService.getMenuCategories().subscribe(res => {
      this.menuCategories = res;
    });
  }

  onClick(category){
    this.menuService.setCurrentCategory(category.categoryType);
    this.router.navigate(["/menu"]);
   
  }
}
