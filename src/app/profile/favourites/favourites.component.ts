import { Component, OnInit } from '@angular/core';
import { FavouritesService } from './favourites.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  authenticationToken:any;
  favouriteItems: any;
  user: any;
  constructor(private favouritesService: FavouritesService, 
              private authService: AuthService) { }

  ngOnInit() {
    // this.favouritesService.getFavourites().subscribe(
    //   resp => {
    //     this.favouriteItems = resp
    //     console.log(this.favouriteItems);
    //   }  
    // )
    // this.user =  this.authService.getCurrentUser()
    // console.log(this.user);

  }

}
