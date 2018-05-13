import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourite: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleFavourite() {
    this.isFavourite = !this.isFavourite;
  }
}
