import { Component, OnInit } from '@angular/core';
import { ChefService } from './chef.servise';

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
      console.log(this.chefs);
    });
  }

  // chefs = [
  //   {
  //     image:
  //       'http://jgarnerphoto.com/_uploads/images/gallery/rainier-club/_galleryThumb/RC_CHEF_165-professional-photography-lifestyle-photographer.jpg',
  //     name: 'Angel Siderov',
  //     job: 'Main Chef',
  //     description:
  //       'Chef Siderov is with over 18 years of international experience in the restaurant business, especially in one of the most renowned restaurants in Sofia - Mr. Pizza. Dimitar is not just a cook, he is an extraordinary Manager and leader. He is an expert in the restaurant management - from creating the conception, designing the menu, forming teams, educating and motivating teams until total excellence and development.'
  //   },
  //   {
  //     image:
  //       'http://www.eatout.co.za/wp-content/uploads/2016/02/Jamie-Oliver.jpg',
  //     name: 'Jamie Oliver',
  //     job: 'Main Chef',
  //     description:
  //       'James Trevor Oliver MBE (born 27 May 1975) is a British celebrity chef and restaurateur. His typically English cuisine has garnered him numerous television shows and restaurants. Oliver is first job was a pastry chef at Antonio Carluccio is Neal Street restaurant, where he first gained experience with preparing Italian cuisine, and developed a relationship with his mentor Gennaro Contaldo. '
  //   }
  // ];
}
