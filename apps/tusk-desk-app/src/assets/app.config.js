'use strict';

angular
  .module('tusk-desk-app')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/companies', {
          template: '<company-overview></company-overview>'
        })
        .otherwise({template: ''});
      $locationProvider.html5Mode(true);
    }
  ]);
