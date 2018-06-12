import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-list-item-edit',
  templateUrl: './menu-list-item-edit.component.html',
  styleUrls: ['./menu-list-item-edit.component.scss']
})
export class MenuListItemEditComponent implements OnInit {
  @Input() menuItem: any;

  criteria = '';
  constructor() {}

  ngOnInit() {
    
  }
}
