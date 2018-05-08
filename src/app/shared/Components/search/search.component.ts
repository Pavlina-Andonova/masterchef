import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchCriteriaChange = new EventEmitter<string>();
  searchCriteria="";
  constructor() { }

  ngOnInit() {
  }

  criteriaChange() {
    this.searchCriteriaChange.emit(this.searchCriteria);
  }
 
}
