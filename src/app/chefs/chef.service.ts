import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChefService {
  constructor(private http: HttpClient) {}

  setHeader() {
    return {
      headers: new HttpHeaders({
        Authorization: sessionStorage.getItem('jwtToken')
      })
    };
  }

  createChef(chefData) {
    return this.http.post('/api/chef', this.setHeader(), chefData);
  }

  updateChef(chefData) {
    return this.http.put(
      '/api/chef/' + chefData.id,
      this.setHeader(),
      chefData
    );
  }

  getChefs() {
    return this.http.get('/api/chefs');
  }

  getChef(id: number) {
    return this.http.get('/api/chef/' + id);
  }
}
