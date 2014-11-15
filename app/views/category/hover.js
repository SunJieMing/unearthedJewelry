'use strict';
$(document).ready(function() {

  $('.category-image').on('mouseenter mouseleave', function(event) {
  	if (event.type == 'mouseenter') {
  		console.log("mouse entered");
  		$('.category-image').find('.image-hover').fadeIn('fast');
  	}
  	else {
  		$('.category-image').find('.image-hover').fadeOut('fast');
  		console.log('Mouse Left');
  	}
  });

});
