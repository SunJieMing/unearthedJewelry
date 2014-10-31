angular.module('unearthedApp')

.controller('CategoryCtrl', ['$scope', 'CategoryFactory', function($scope, CategoryFactory) {
  $scope.braceletList = {};

  CategoryFactory.getBracelets().then(function(data){
    $scope.braceletList = data;
    console.log($scope.braceletList);
  });

}]);