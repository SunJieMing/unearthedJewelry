'use strict';
angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('product', {
    url: '/:product',
    templateUrl: '/product/product.html',
    controller: 'ProductCtrl'
  });
});
