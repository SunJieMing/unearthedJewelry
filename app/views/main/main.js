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

angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
    .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function        ($scope, $timeout, $transition, $q) {
}]).directive('carousel', [function() {
    return {

    }
}]);

$(document).ready(function() {
	console.log("This is the document.ready function")
	
	$('.mobile-nav').click(function() {
		console.log("I am clicking!!!");
	});

     // $('.menu-btn').click(function(){
	    //  $('.responsive-menu').addClass('expand')
	    //  $('.menu-btn').addClass('btn-none')
	    //  console.log("This is the click-open function")
     // })
     
     // $('.close-btn').click(function(){
	    //  $('.responsive-menu').removeClass('expand')
	    //  $('.menu-btn').removeClass('btn-none')
	    //  console.log("This is the click-close function")
     // })
   
   
	
     // $('.menu-btn').click(function(){
     // 	$('.responsive-menu').toggleClass('expand')
     // 	console.log("You are clicking the Menu Button");
     // })
   

});
