'use strict';

angular
  .module('tusk-desk-app')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .otherwise({template: ''});
      $locationProvider.html5Mode(true);
    }
  ]);
