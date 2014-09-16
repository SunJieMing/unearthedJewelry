'use strict';

angular
.module('unearthedApp', [
  'ui.router',
  'ui.bootstrap'
  ])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider
  .otherwise('/');

  $locationProvider.html5Mode(true);
});