'use strict';
angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: '/about/about.html',
    controller: 'AboutCtrl'
  });
});
