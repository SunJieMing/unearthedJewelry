'use strict';
angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('contact', {
    url: '/contact',
    templateUrl: '/contact/contact.html',
    controller: 'ContactCtrl'
  });
});
