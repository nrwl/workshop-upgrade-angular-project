import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input() tuskCompanies;
  @Output() onFilterChange = new EventEmitter();
  notifyList = [];

  constructor() {}

  ngOnInit() {}

  onNotifyAll() {
    this.notifyList = this.tuskCompanies.map(function (t) {
      return t.id;
    });
  }

  onClearFilter() {
    this.onFilterChange.emit('');
  }

  onGroupSelected(groupName) {
    this.onFilterChange.emit(groupName);
  }
}
