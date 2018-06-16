import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-custom-button-goldenrod',
  templateUrl: './custom-button-goldenrod.component.html',
  styleUrls: ['./custom-button-goldenrod.component.scss']
})
export class CustomButtonGoldenrodComponent implements OnInit {
  @Input() buttonText;
  @Input() id: string = '';
  @Input() clicked: any;
  @Input() type;
  constructor() { }

  ngOnInit() {
  }

}
