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
