'use strict';

angular.module('unearthedApp').controller('CarouselCtrl', function ($scope, MainFactory) {

  $scope.dataArray;
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];

  MainFactory.getCarouselData().then(function(data){
    $scope.slides = data.results;
  });

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    // slides.push({
    //   image: 'images/homepage.png',
    //   title: 'DZI BEAD BRACELETS',
    //   description: 'The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India. The elegant design of these bracelets is unmatched this side of India.'
    // });
  };
  for (var i = 0; i < 3; i++) {
    $scope.addSlide();
  }
});
