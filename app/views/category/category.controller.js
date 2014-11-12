'use strict';
angular.module('unearthedApp')

.controller('CategoryCtrl', ['$scope', 'CategoryFactory', '$stateParams', function($scope, CategoryFactory, $stateParams) {
  
  $scope.categoryList = {};


  CategoryFactory.getCategoryList().then(function(data){
    $scope.categoryList = data;
    //console.log($scope.categoryList);
  });

}]);
