import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuCategories = [
    {type:'Salads', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyd3tN39KovEpDFCZkqljmGHcifaxFYnWVphNe4cybvBJsm2H1'},
    {type:'Desserts', img:'http://assets.kraftfoods.com/recipe_images/opendeploy/128187_640x428.jpg'}
  ]

  numbers = [
    {n:'1'},
    {n:'2'},
    {n:'3'},
    {n:'4'},
    {n:'5'}
  ]

}
