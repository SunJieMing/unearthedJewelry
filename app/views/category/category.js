'use strict';
angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('category', {
    url: '/:category',
    templateUrl: '/category/category.html',
    controller: 'CategoryCtrl'
  });
});
