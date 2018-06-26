import { Component, OnInit } from '@angular/core';
import { ChefService } from './chef.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {
  chefs: any;
  constructor(private chefService: ChefService) {}

  ngOnInit() {
    this.chefService.getChefs().subscribe(res => {
      this.chefs = res;
    });
  }
}
