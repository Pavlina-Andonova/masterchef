import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MenuService } from "../../menu.service";
import { ValidationManager } from "../../../shared/Services/validation-manager";

@Component({
  selector: "app-menu-list-item-edit",
  templateUrl: "./menu-list-item-edit.component.html",
  styleUrls: ["./menu-list-item-edit.component.scss"]
})
export class MenuListItemEditComponent implements OnInit {
  @Input() menuItem: any;
  @Input() categories: any;
  isEditting: boolean = false;
  @Output() deletedMenuItem = new EventEmitter<any>();
  @Output() editedMenuItem = new EventEmitter<any>();
  menuItemForm: any;
  criteria = "";
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuItemForm = new ValidationManager({
      categoryId: "required",
      title: "required",
      description: "required",
      price: "required",
      weight: "required",
      menuItemImage: ""
    });

    this.menuItemForm.setValue({
      categoryId: this.menuItem.category.id,
      title: this.menuItem.title,
      description: this.menuItem.description,
      price: this.menuItem.price,
      weight: this.menuItem.weight,
      menuItemImage: this.menuItem.menuItemImage
    });
  }

  onDelete() {
    this.menuService.deleteMenuItemById(this.menuItem.id).subscribe(
      resp => {
        this.deletedMenuItem.emit(this.menuItem.id);
      },
      err => {}
    );
  }

  onEdit() {
    let menuItemData = {
      ...this.menuItemForm.formGroup.value,
      id: this.menuItem.id
    };
    this.isEditting = !this.isEditting;

    menuItemData = {
      ...menuItemData,
      categoryId: +menuItemData.categoryId
    };

    if (!this.isEditting) {
      this.menuService.updateMenuItem(menuItemData).subscribe(
        resp => {
          this.menuItem = resp;
          this.editedMenuItem.emit(resp);
        },
        err => {}
      );
    }
  }
}
