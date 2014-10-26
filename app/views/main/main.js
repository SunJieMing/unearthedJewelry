'use strict';
angular.module('unearthedApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: '/views/main/main.html', //I'm not sure if it should be this or app/views/main/main.html
    controller: 'MainCtrl'
  });
});

//This reinitializes the carousel and eliminates several erratic errors.
//Found the answer to this issue on SO: 
//http://stackoverflow.com/questions/20137900/controller-carousel-required-by-directive-ngtransclude-cant-be-found

// angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
//     .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function        ($scope, $timeout, $transition, $q) {
// }]).directive('carousel', [function() {
//     return {

//     }
// }]);

angular.module('unearthedApp').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    slides.push({
      image: 'images/homepage.png',
      title: 'DZI BEAD BRACELETS',
      description: 'The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India.'
    });
  };
  for (var i = 0; i < 3; i++) {
    $scope.addSlide();
  }
});
