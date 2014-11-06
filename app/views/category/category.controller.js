angular.module('unearthedApp')

.controller('CategoryCtrl', ['$scope', 'CategoryFactory', function($scope, CategoryFactory) {
  $scope.braceletList = {};

  CategoryFactory.getBracelets().then(function(data){
    $scope.braceletList = data;
    console.log($scope.braceletList);
  });

  $scope.coverToggle = false;

  $scope.reveal = function () {
  	$scope.coverToggle = true;
  }

  $scope.hide = function () {
  	$scope.coverToggle = false;
  }

}]);


// .directive('productHover', function() {
//  	return {

//  		template:'<h2>{{product.name}}</h2><p>{{product.mainDescription}}</p>'

//  	};

//  });
