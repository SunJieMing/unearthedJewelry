'use strict';
angular
.module('unearthedApp', [
  'ui.router',
  'ui.bootstrap',
  'ngAnimate'
  ])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  
  $httpProvider.defaults.headers.common = { 
    'Content-Type' : 'application/json',
    'X-Parse-REST-API-Key' : 'VwpRFXQ82GB7dbUJ9k1k6oIDj9k5feVr1Rw0Fq5b',
    'X-Parse-Application-Id' : 'WDM9Pd2iFQYa8Fgu8NcLY2rS8EGL6OYQMonAB81H'
  };

  $urlRouterProvider
  .otherwise('/');

  $locationProvider.html5Mode(true);
}]);
