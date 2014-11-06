'use strict';

angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('product', {
    url: '/product/:id',
    templateUrl: '/views/product/product.html',
    controller: 'ProductCtrl'
  });
});
