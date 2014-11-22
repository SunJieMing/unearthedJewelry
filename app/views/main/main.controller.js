'use strict';
angular.module('unearthedApp')
.controller('MainCtrl', function($scope, MainFactory) {
  $scope.test = 'Hello World!';

  $scope.history;
  $scope.quality;

  MainFactory.getPageCopy().then(function(data){
    var copy = data.results[0];
    $scope.history = copy.history;
    $scope.quality = copy.quality;
  });
});
