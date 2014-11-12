'use strict';
angular.module('unearthedApp')
.controller('NavCtrl', ['$scope', function($scope) {
  $scope.testFunction = function(str) {
    console.log(str);
  }

}]);