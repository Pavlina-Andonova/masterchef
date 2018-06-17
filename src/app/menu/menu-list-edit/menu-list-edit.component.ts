import { Component, OnInit, Input } from "@angular/core";
import { MenuService } from "../menu.service";

@Component({
  selector: "app-menu-list-edit",
  templateUrl: "./menu-list-edit.component.html",
  styleUrls: ["./menu-list-edit.component.scss"]
})
export class MenuListEditComponent implements OnInit {
  menuList: any;
  @Input() categories: any;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenu().subscribe(
      res => {
        this.menuList = res;
      },
      err => {
        err.error.msg;
      }
    );
  }

  handleNewMenuItem(menuItemData) {
    this.menuList.unshift(menuItemData);
  }

  handleDeletedMenuItem(menuItemId: any) {
    this.menuList = this.menuList.filter(item => {
      return item.id !== menuItemId;
    });
  }

  handleEditedMenuItem(menuItem: any) {
    this.menuList = this.menuList.map(item => {
      if (item.id === menuItem.id) {
        item = menuItem;
      }
      return item;
    });
  }
}
