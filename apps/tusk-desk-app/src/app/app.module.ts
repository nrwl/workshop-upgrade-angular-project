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
import { RouterModule } from '@angular/router';
import { CompanyActivityComponent } from './companies/company-activity/company-activity.component';
import { CompanyCardComponent } from './companies/company-card/company-card.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CompanyOverviewComponent } from './companies/company-overview/company-overview.component';
import { CompanyService } from './companies/company.service';
import { TeamService } from './companies/team.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'tickets' },
      { path: 'tickets', component: TicketOverviewComponent },
      { path: 'companies', component: CompanyOverviewComponent }
    ]),
    NxModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketCardComponent,
    TicketActivityComponent,
    TicketOverviewComponent,
    CompanyActivityComponent,
    CompanyCardComponent,
    CompanyListComponent,
    CompanyOverviewComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [UserService, TicketService, CompanyService, TeamService]
})
export class AppModule {
}
