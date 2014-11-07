'use strict';

angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('product', {
    url: '/:category/:id',
    templateUrl: '/views/product/product.html',
    controller: 'ProductCtrl'
  });
});
