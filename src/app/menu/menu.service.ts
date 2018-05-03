import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get('/api/menu');
  }
}
