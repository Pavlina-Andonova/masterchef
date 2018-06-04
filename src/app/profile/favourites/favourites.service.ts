import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FavouritesService {
  constructor(private http: HttpClient) {}


  addFavourite(favItem){
    return this.http.post('/api/favourites/add', favItem)
  }

  getFavourites() {
    return this.http.get('/api/favourites');
  }

  deleteFavourite() {
    return this.http.delete('/api/favourites/remove')
  }
}
