angular.module('unearthedApp')
.controller('ProductCtrl', ['$scope', 'ProductFactory', function($scope, ProductFactory) {
  console.log('product controller fired!');
  
  $scope.individualItem = {};
  
  ProductFactory.getItem().then(function(data){
    $scope.individualItem = data;
    console.log($scope.individualItem);
  });

}]);