'use strict';
angular.module('unearthedApp')

.controller('CategoryCtrl', ['$scope', 'CategoryFactory', '$stateParams', function($scope, CategoryFactory, $stateParams) {
  
  $scope.showCover = false;
  $scope.categoryList = {};
  $scope.title;
  $scope.mainCopy;
  $scope.imageUrl;

  CategoryFactory.getCategoryList().then(function(data) {
    $scope.categoryList = data;
    console.log(data);
  });

  CategoryFactory.getCategoryCopy().then(function(data) {
    console.log($stateParams);
    var copy = data.results[0];
    if($stateParams.category === "bracelets") {
      $scope.title = copy.braceletTitle;
      $scope.mainCopy = copy.braceletDescription;
      $scope.imageUrl = copy.braceletImage.url;
    } else if ($stateParams.category === "rings") {
      $scope.title = copy.ringTitle;
      $scope.mainCopy = copy.ringDescription;
      $scope.imageUrl = copy.ringImage.url;
    } else if ($stateParams.category === "stones") {
      $scope.title = copy.stoneTitle;
      $scope.mainCopy = copy.stoneDescription;
      $scope.imageUrl = copy.stoneImage.url;
    } else if ($stateParams.category === "necklaces") {
      $scope.title = copy.necklaceTitle;
      $scope.mainCopy = copy.necklaceDescription;
      $scope.imageUrl = copy.necklaceImage.url;
    }
  });
$scope.isSold = function (item) {
  if (item.sold === true) {
    return false;
  }
  else {
    return true;
  }
}


}]);
