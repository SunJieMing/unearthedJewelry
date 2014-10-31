angular.module('unearthedApp')
.controller('CategoryCtrl', ['$scope', 'CategoryFactory', function($scope, CategoryFactory) {
  $scope.test = 'Hello World!';
  CategoryFactory.getBracelets().then(function(data){
    console.log(data);
  });

}]);