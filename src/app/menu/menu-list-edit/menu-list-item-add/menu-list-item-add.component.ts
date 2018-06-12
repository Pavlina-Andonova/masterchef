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

  constructor( private menuService: MenuService, private http: HttpClient) {}

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
    this.menuService.createMenuItem(formData).subscribe(
      resp => {
        this.newMenuItemAdded.emit(resp);
        console.log(formData);
      }
)
  }

//   this.authService.registerUser(userData).subscribe(
//     resp => {
//       this.data = resp;
//       sessionStorage.setItem('jwtToken', this.data.token);
//       this.authService.setIsUserAuthenticated(!!resp);
//       this.router.navigate(['']);
//       this.isModal = false;
//       this.getSignupModalStateChange.emit(false);
//     },
//     err => {
//       this.message = err.error.msg;
//       this.authService.setIsUserAuthenticated(false);
//     }
//   );
 }
