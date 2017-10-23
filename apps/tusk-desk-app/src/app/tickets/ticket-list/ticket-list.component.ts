import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  @Input() tuskTickets;
  @Output() onFilterChange = new EventEmitter();
  notifyList = [];

  constructor(@Inject('$rootScope') private rootScope: any) {}

  ngOnInit() {}

  onNotifyAll() {
    this.notifyList = this.tuskTickets.map(function(t) {
      return t.id;
    });
    // we need to force digest to trigger angularjs change detection
    this.rootScope.$digest();
  }

  // we need a method to broker the onFilterChange emit to be able to force digest
  onClearFilter() {
    this.onFilterChange.emit('');
    // we need to force digest to trigger angularjs change detection
    this.rootScope.$digest();
  }

  onSubmittedBySelected(submittedBy) {
    this.onFilterChange.emit(submittedBy);
  }
}
