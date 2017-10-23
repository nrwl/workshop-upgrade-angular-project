import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketCardComponent } from './tickets/ticket-card/ticket-card.component';
import { TicketActivityDirective } from './tickets/ticket-activity/ticket-activity.directive';
import { TicketService } from './tickets/ticket.service';

export function getUserService($injector) {
  return $injector.get('userService');
}

@NgModule({
  imports: [BrowserModule, NxModule.forRoot()],
  declarations: [AppComponent, TicketListComponent, TicketCardComponent, TicketActivityDirective],
  entryComponents: [AppComponent, TicketListComponent, TicketCardComponent],
  providers: [
    {
      provide: 'userService',
      useFactory: getUserService,
      deps: ['$injector']
    },
    TicketService
  ]
})
export class AppModule {
  ngDoBootstrap(): void {}
}
