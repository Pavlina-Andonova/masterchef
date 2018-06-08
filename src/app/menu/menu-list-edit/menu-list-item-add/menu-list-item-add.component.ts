import { Component, OnInit } from '@angular/core';
import { ValidationManager } from '../../../shared/Services/validation-manager';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-list-item-add',
  templateUrl: './menu-list-item-add.component.html',
  styleUrls: ['./menu-list-item-add.component.scss']
})
export class MenuListItemAddComponent implements OnInit {
form;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    // this.form = new ValidationManager({
    //   image: 'required',
    //   type: 'required',
    //   title: 'required',
    //   description: 'required',
    //   price: 'required',
    //   weight: 'required',
    // })
  }

  // addMenuItem(menuItemData) {
  //   let manuItemData = { ...this.form.formGroup.value };

  //   this.menuService.createMenuItem(menuItemData)
  // }

}
