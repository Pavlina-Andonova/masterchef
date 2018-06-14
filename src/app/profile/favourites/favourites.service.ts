import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FavouritesService {
  constructor(private http: HttpClient) {}


  addFavourite(favItem){
    return this.http.post('/api/favourites/add', favItem)
  }

  getFavourites(token) {
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: token })
    };
    return this.http.get('/api/favourites', httpOptions);
  }

  deleteFavourite() {
    return this.http.delete('/api/favourites/remove')
  }
}
