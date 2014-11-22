'use strict';
angular.module('unearthedApp')
.controller('ProductCtrl', ['$scope', 'ProductFactory', function($scope, ProductFactory) {  
  $scope.individualItem = {};
  $scope.mainImageUrl = '';
  ProductFactory.getItem().then(function(data){
    $scope.individualItem = data;
    $scope.mainImageUrl = data.mainImage.url;
  });

  $scope.switchImage = function(img) {
    $scope.mainImageUrl = img;
  }

}]);
