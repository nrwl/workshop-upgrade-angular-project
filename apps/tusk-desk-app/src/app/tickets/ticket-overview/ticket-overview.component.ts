import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverviewComponent implements OnInit {
  _tickets = [
    { id: 1, title: 'Need help with UI', submittedBy: 'Mary', company: 'ABC Corp' },
    { id: 2, title: 'Submit not working', submittedBy: 'Ned', company: 'Priority Gems' },
    { id: 3, title: 'How do I upload files?', submittedBy: 'Bob', company: 'ABC Corp' },
    {
      id: 4,
      title: 'Schedule a video call for training',
      submittedBy: 'Mary',
      company: 'ABC Corp'
    },
    { id: 5, title: 'Minor issue with layout', submittedBy: 'Jules', company: 'Priority Gems' }
  ];
  tickets = this._tickets;
  currentUserName;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.currentUserName = this.userService.currentUser();
  }

  onFilterChanged(filter) {
    this.tickets = this._tickets.filter(function(t) {
      return filter === '' || t.submittedBy === filter;
    });
  }
}
