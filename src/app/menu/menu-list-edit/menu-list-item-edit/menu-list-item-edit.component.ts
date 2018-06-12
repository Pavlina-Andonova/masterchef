import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MenuService } from "../../menu.service";

@Component({
  selector: "app-menu-list-item-edit",
  templateUrl: "./menu-list-item-edit.component.html",
  styleUrls: ["./menu-list-item-edit.component.scss"]
})
export class MenuListItemEditComponent implements OnInit {
  @Input() menuItem: any;
  isEditting: boolean = true;
  @Output() deletedMenuItem = new EventEmitter<any>();

  criteria = "";
  constructor(private menuService: MenuService) {}

  ngOnInit() {}

  onDelete() {
    this.menuService.deleteMenuItemById(this.menuItem.id).subscribe(
      resp => {
        this.deletedMenuItem.emit(this.menuItem.id);
      },
      err => {

      }
    );
  }

  onEdit() {
    this.isEditting = !this.isEditting;
  }
}
