import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuService } from '../../menu.service';
import { FavouritesService } from '../../../profile/favourites/favourites.service';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {
  menu: any;
  menuItem;
  id;
  favouriteMenuItem;
  selectedItem;

  @Output() newFavouriteItemAdded = new EventEmitter<any>();

  criteria = '';
  constructor(
    private menuService: MenuService,
    private favService: FavouritesService
  ) {}
  filteredMenu
  ngOnInit() {
    this.menuService.getMenu().subscribe(
      res => {
        this.menu = res;
        console.log(this.menu)
      },
      err => {
        err.error.msg;
      }
    );
  }

  handleCriteriaChange(criteria: string) {
    this.criteria = criteria;
  }

  addToFavourites() {
    console.log('Add to fav')
  }
}
