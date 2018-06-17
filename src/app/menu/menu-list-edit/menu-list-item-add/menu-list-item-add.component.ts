import { Component, OnInit, EventEmitter, Input } from "@angular/core";
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
  @Input() categories: any;
  @Output() newMenuItemAdded = new EventEmitter<any>();

  constructor(private menuService: MenuService, private http: HttpClient) {}

  ngOnInit() {
    this.menuItemForm = new ValidationManager({
      categoryId: "required",
      title: "required",
      description: "required",
      price: "required",
      weight: "required",
      menuItemImage: ""
    });
  }

  onSubmit() {
    let formData = { 
      ...this.menuItemForm.formGroup.value,
      menuItemImage: 'http://flashnews.bg/wp-content/uploads/2017/03/pizza-1150031_960_720.jpg'
    };
    
    formData = {
      ...formData,
      categoryId: +formData.categoryId
    };
    
    this.menuService.createMenuItem(formData).subscribe(resp => {
      this.newMenuItemAdded.emit(resp);
      this.menuItemForm.reset();
    });
  }

}
