import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cheffs = [
    {
      name: 'Cheff 1',
      description: ' asdas asd asd asd asd';
    },
    {
      name: 'Cheff 2',
      description: ' asdas asd asd asd asd';
    },
    {
      name: 'Cheff 3',
      description: ' asdas asd asd asd asd';
    },
  ]
}
