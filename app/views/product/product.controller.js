angular.module('unearthedApp')
.controller('ProductCtrl', ['$scope', 'ProductFactory', function($scope, ProductFactory) {
  console.log('product controller fired!');
  ProductFactory.getBracelet();

}]);