angular.module('unearthedApp')
.controller('ProductCtrl', ['$scope', 'ProductFactory', function($scope, ProductFactory) {  
  $scope.individualItem = {};
  
  ProductFactory.getItem().then(function(data){
    $scope.individualItem = data;
    //console.log($scope.individualItem);
  });

}]);