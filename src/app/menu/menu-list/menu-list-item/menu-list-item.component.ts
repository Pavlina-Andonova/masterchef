import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {

  constructor() { }

  categories = [
    {type: 'salad'},
    {type: 'desserts'},
    {type: 'main'},
    {type: 'pizza'},
    {type: 'drinks'}
  ]
  ngOnInit() {
  }

}
