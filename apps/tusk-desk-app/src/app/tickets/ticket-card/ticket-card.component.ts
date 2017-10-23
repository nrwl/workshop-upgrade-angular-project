import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { UserService } from 'apps/tusk-desk-app/src/app/tickets/user.service';

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

  constructor(private userService: UserService) {}

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
  }

  onSubmittedBySelected(submittedBy) {
    this.onSubmittedBySelect.emit(submittedBy);
  }
}
