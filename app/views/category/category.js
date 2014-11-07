'use strict';
angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('category', {
    url: '/:category',
    templateUrl: '/views/category/category.html',
    controller: 'CategoryCtrl'
  });
});
