'use strict';
angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: '/main/main.html', //I'm not sure if it should be this or app/views/main/main.html
    controller: 'MainCtrl'
  });
});
