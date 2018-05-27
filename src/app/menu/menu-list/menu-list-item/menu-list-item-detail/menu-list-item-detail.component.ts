import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../menu.service';

@Component({
  selector: 'app-menu-list-item-detail',
  templateUrl: './menu-list-item-detail.component.html',
  styleUrls: ['./menu-list-item-detail.component.scss']
})
export class MenuListItemDetailComponent implements OnInit {
  menuDetail: any;
  isReviewOpen:boolean = false;
  constructor(private route: ActivatedRoute, private menuSrevice: MenuService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
     this.menuSrevice.getMenuItemById(params['id']).subscribe(
       res => {
         this.menuDetail = res; 
       }
     );
    });
  }

  addReview() {
    this.isReviewOpen = !this.isReviewOpen;
  }
}

