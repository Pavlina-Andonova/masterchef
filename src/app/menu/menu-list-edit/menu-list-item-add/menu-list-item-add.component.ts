import { Component, OnInit, EventEmitter } from "@angular/core";
import { MenuService } from "../../menu.service";
import { ValidationManager } from "../../../shared/Services/validation-manager";
import { HttpClient } from "@angular/common/http";
import { Output } from "@angular/core";

@Component({
  selector: "app-menu-list-item-add",
  templateUrl: "./menu-list-item-add.component.html",
  styleUrls: ["./menu-list-item-add.component.scss"]
})
export class MenuListItemAddComponent implements OnInit {
  menuItemForm: any;

  @Output() newMenuItemAdded = new EventEmitter<any>();

  constructor(private menuService: MenuService, private http: HttpClient) {}

  ngOnInit() {
    this.menuItemForm = new ValidationManager({
      type: "required",
      title: "required",
      description: "required",
      price: "required",
      weight: "required",
      menuItemImage: "required"
    });
  }

  onSubmit() {
    const formData = { ...this.menuItemForm.formGroup.value };
    this.menuService.createMenuItem(formData).subscribe(resp => {
      this.newMenuItemAdded.emit(resp);
      this.menuItemForm.reset();
    });
  }

}
