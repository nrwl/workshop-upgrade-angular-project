import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketCardDirective } from './tickets/ticket-card/ticket-card.directive';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot()],
  declarations: [AppComponent, TicketListComponent, TicketCardDirective],
  entryComponents: [AppComponent, TicketListComponent]
})
export class AppModule {
  ngDoBootstrap(): void {}
}
