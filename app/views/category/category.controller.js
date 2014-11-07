angular.module('unearthedApp')

.controller('CategoryCtrl', ['$scope', 'CategoryFactory', '$stateParams', function($scope, CategoryFactory, $stateParams) {
  
  $scope.categoryList = {};

  if ($stateParams.category === 'bracelets') {
    console.log('great success!!!');
  }

  CategoryFactory.getCategoryList().then(function(data){
    $scope.categoryList = data;
    console.log($scope.categoryList);
  });

  $scope.coverToggle = false;

  $scope.reveal = function () {
  	$scope.coverToggle = true;
  }

  $scope.hide = function () {
  	$scope.coverToggle = false;
  }

}]);
