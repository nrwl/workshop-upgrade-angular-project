import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  @Input() tuskTickets;
  @Output() onFilterChange = new EventEmitter();
  notifyList = [];

  constructor() {}

  ngOnInit() {}

  onNotifyAll() {
    this.notifyList = this.tuskTickets.map(function(t) {
      return t.id;
    });
  }

  onClearFilter() {
    this.onFilterChange.emit('');
  }

  onSubmittedBySelected(submittedBy) {
    this.onFilterChange.emit(submittedBy);
  }
}
