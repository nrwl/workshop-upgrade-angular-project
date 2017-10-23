import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-activity',
  templateUrl: './ticket-activity.component.html',
  styleUrls: ['./ticket-activity.component.css']
})
export class TicketActivityComponent implements OnInit, OnChanges {
  @Input() tuskTicket;
  activityVisible = false;
  ticketActivity;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.ticketActivity = this.ticketService.getActivity(this.tuskTicket.id);
  }

  toggleActivity() {
    this.activityVisible = !this.activityVisible;
  }
}
