import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  isEditing: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  onEdit(){
    this.isEditing = !this.isEditing;
  }

  onSave(){
    this.isEditing = !this.isEditing;
  }

  onDelete(){

  }

}
