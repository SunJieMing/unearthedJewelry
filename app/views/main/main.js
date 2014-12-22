'use strict';
angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: '/views/main/main.html',
    controller: 'MainCtrl'
  });
});
