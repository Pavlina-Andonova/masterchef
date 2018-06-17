import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { FavouritesService } from "../favourites.service";
import { AuthService } from "../../../auth/auth.service";

@Component({
  selector: "app-favourite-item",
  templateUrl: "./favourite-item.component.html",
  styleUrls: ["./favourite-item.component.scss"],
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          transform: "translateX(0)",
          opacity: 1
        })
      ),
      state(
        "fade",
        style({
          transform: "translateX(70%)",
          opacity: 0,
          display:'none'
        })
      ),
      transition("normal => fade", animate(400))
    ])
  ]
})
export class FavouriteItemComponent implements OnInit {
  state = "normal";
  @Input() favItem;
  @Output() deletedFavouriteItem = new EventEmitter<any>();

  constructor(
    private favouritesService: FavouritesService,private authService: AuthService) {}

  ngOnInit() {}

  onDelete(id) {
    this.favouritesService.deleteFavourite(id).subscribe(res => {
      this.deletedFavouriteItem.emit(id);
      this.state == "normal" ? (this.state = "fade") : (this.state = "normal");
    });
  }
}
