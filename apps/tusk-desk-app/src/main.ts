import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as angular from 'angular';
import 'angular-route';
import { downgradeComponent, downgradeInjectable, downgradeModule, setAngularLib } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import './assets/app.module.js';
import './assets/app.config.js';
import './assets/tickets/tickets.module.js';
import './assets/tickets/ticket-overview/ticket-overview.component.js';
import './assets/tickets/ticket-activity/ticket-activity.component.js';
import './assets/tickets/user.service.js';
import './assets/companies/companies.module.js';
import './assets/companies/company-overview/company-overview.component.js';
import './assets/companies/company-list/company-list.component.js';
import './assets/companies/company-card/company-card.component.js';
import './assets/companies/company-activity/company-activity.component.js';
import './assets/companies/company.service.js';
import './assets/companies/team.service.js';
import { AppComponent } from './app/app.component';
import { TicketListComponent } from './app/tickets/ticket-list/ticket-list.component';
import { TicketService } from './app/tickets/ticket.service';

export function bootstrapAngular(extra: StaticProvider[]): any {
  setAngularLib(angular);
  if (environment.production) {
    enableProdMode();
  }
  return platformBrowserDynamic(extra)
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
}

const downgraded = angular
  .module('downgraded', [downgradeModule(bootstrapAngular)])
  .directive('appRoot', downgradeComponent({ component: AppComponent, propagateDigest: false }));

angular.module('tickets').directive('ticketList', downgradeComponent({ component: TicketListComponent }));

angular.module('tickets').service('ticketService', downgradeInjectable(TicketService));

angular.bootstrap(document, ['tusk-desk-app', downgraded.name]);
