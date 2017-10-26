import { Component, Directive, ElementRef, Inject, Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketCardComponent } from './tickets/ticket-card/ticket-card.component';
import { TicketService } from './tickets/ticket.service';
import { TicketActivityComponent } from './tickets/ticket-activity/ticket-activity.component';
import { TicketOverviewComponent } from './tickets/ticket-overview/ticket-overview.component';
import { UserService } from './tickets/user.service';
import { Router, RouterModule } from '@angular/router';
import { UpgradeComponent } from '@angular/upgrade/static';

@Component({ selector: 'app-empty-element', template: '' })
export class EmptyComponent {}

@Directive({ selector: 'angularjs-router-outlet' })
export class AngularJSRouterOutletDirective extends UpgradeComponent {
  constructor(ref: ElementRef, inj: Injector) {
    super('angularjsRouterOutlet', ref, inj);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'tickets' },
        { path: 'tickets', component: TicketOverviewComponent },
        { path: '**', component: EmptyComponent }
      ]
    ),
    NxModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketCardComponent,
    TicketActivityComponent,
    TicketOverviewComponent,
    EmptyComponent,
    AngularJSRouterOutletDirective
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [UserService, TicketService]
})
export class AppModule {
  constructor(router: Router, @Inject('$rootScope') $rootScope) {
    router.initialNavigation();
    connectRouters(router, $rootScope);
  }
  ngDoBootstrap(): void {
  }
}

export function connectRouters(router: Router, $rootScope: any) {
  router.events.subscribe(() => {
    $rootScope.$digest();
  });

  $rootScope
    .$on('$locationChangeStart', (_: any, next: string, __: string) => {
      const url = document.createElement('a'); // for parsing url
      url.href = next;
      router.navigateByUrl(url.pathname + url.search + url.hash);
    });
}
