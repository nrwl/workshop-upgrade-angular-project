import { Directive, ElementRef, Injector, Input, Output } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ticket-card'
})
export class TicketCardDirective extends UpgradeComponent {
  @Input() tuskTicket;
  @Output() onSubmittedBySelect;
  @Input() notifyList;
  @Output() notifyListChange;

  constructor(ref: ElementRef, inj: Injector) {
    super('ticketCard', ref, inj);
  }
}
