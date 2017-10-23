import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketCardComponent } from './tickets/ticket-card/ticket-card.component';
import { TicketService } from './tickets/ticket.service';
import { TicketActivityComponent } from './tickets/ticket-activity/ticket-activity.component';
import { TicketOverviewComponent } from './tickets/ticket-overview/ticket-overview.component';
import { UserService } from './tickets/user.service';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot()],
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketCardComponent,
    TicketActivityComponent,
    TicketOverviewComponent
  ],
  entryComponents: [
    AppComponent,
    TicketListComponent,
    TicketCardComponent,
    TicketActivityComponent,
    TicketOverviewComponent
  ],
  providers: [UserService, TicketService]
})
export class AppModule {
  ngDoBootstrap(): void {}
}
