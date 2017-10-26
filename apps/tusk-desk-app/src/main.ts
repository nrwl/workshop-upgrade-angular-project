import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as angular from 'angular';
import 'angular-route';
import { downgradeComponent, downgradeModule, setAngularLib } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import './assets/app.module.js';
import './assets/app.config.js';
import { AppComponent } from './app/app.component';

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

angular.module('tusk-desk-app').component('angularjsRouterOutlet', {template: '<div ng-view></div>'});

angular.bootstrap(document, ['tusk-desk-app', downgraded.name]);
