angular.module('unearthedApp')
.controller('CategoryCtrl', ['$scope', 'CategoryFactory', function($scope, CategoryFactory) {

  CategoryFactory.getBracelets().then(function(data){
    console.log(data);
  });

}]);