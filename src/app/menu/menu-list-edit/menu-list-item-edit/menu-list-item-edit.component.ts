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
  isEditting: boolean = true;
  @Output() deletedMenuItem = new EventEmitter<any>();
  @Output() editedMenuItem = new EventEmitter<any>();
  menuItemForm: any;
  criteria = "";
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuItemForm = new ValidationManager({
      type: "required",
      title: "required",
      description: "required",
      price: "required",
      weight: "required",
      menuItemImage: "required"
    });

    this.menuItemForm.setValue({
      type: this.menuItem.type,
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
    const menuItemData = {
      ...this.menuItemForm.formGroup.value,
      id: this.menuItem.id
    };
    this.isEditting = !this.isEditting;

    if (this.isEditting) {
      this.menuService.updateMenuItem(menuItemData).subscribe(
        resp => {
          this.editedMenuItem.emit(menuItemData);
        },
        err => {}
      );
    }
  }
}
