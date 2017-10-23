import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ticket-activity'
})
export class TicketActivityDirective extends UpgradeComponent {
  @Input() tuskTicket;

  constructor(ref: ElementRef, inj: Injector) {
    super('ticketActivity', ref, inj);
  }
}
