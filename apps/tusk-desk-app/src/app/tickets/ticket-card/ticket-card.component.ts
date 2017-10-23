import { Component, OnInit, Input, Output, EventEmitter, Inject, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit, OnChanges {
  @Input() tuskTicket;
  @Input() notifyList;
  @Output() onSubmittedBySelect = new EventEmitter();
  userAssignedToCompany;

  constructor(@Inject('userService') private userService, @Inject('$rootScope') private rootScope: any) {}

  ngOnInit() {}

  ngOnChanges() {
    this.userAssignedToCompany = this.userService.userAssignedToCompany(this.tuskTicket.company);
  }

  onNotifyToggle() {
    if (this.notifyList.indexOf(this.tuskTicket.id) >= 0) {
      this.notifyList.splice(this.notifyList.indexOf(this.tuskTicket.id), 1);
    } else {
      this.notifyList.push(this.tuskTicket.id);
    }
    // we need to force digest to trigger angularjs change detection
    this.rootScope.$digest();
  }

  // we need a method to broker the onSubmittedBySelect emit to be able to force digest
  onSubmittedBySelected(submittedBy) {
    this.onSubmittedBySelect.emit(submittedBy);
    // we need to force digest to trigger angularjs change detection
    this.rootScope.$digest();
  }
}
