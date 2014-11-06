$(document).ready(function() {

// $('.category-image').mouseenter(function(){
// 	$('.image-hover').fadeIn('fast');
// });
// $('.category-image').mouseleave(function(){
// 	$('.image-hover').fadeOut('fast');
// });

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

// $("#orders ul li").hover(
//         function() {
//             $(this ).find(".butt-view").show();
//         },
//         function() {
//             $(this ).find(".butt-view").hide();
// });


// $("#orders").on('mouseenter mouseleave', 'li', function(event) {
//      if (event.type == 'mouseenter') {
//          $(this ).find(".butt-view").show();
//      } else  {
//          $(this ).find(".butt-view").hide();
//      }
// });


// $('.category-image2').mouseenter(function(){
// 	$('.image-hover2').fadeIn('fast');
// });
// $('.category-image2').mouseleave(function(){
// 	$('.image-hover2').fadeOut('fast');
// });

// $('.category-image3').mouseenter(function(){
// 	$('.image-hover3').fadeIn('fast');
// });
// $('.category-image3').mouseleave(function(){
// 	$('.image-hover3').fadeOut('fast');
// });

// $('.category-image4').mouseenter(function(){
// 	$('.image-hover4').fadeIn('fast');
// });
// $('.category-image4').mouseleave(function(){
// 	$('.image-hover4').fadeOut('fast');
// });

// $('.category-image5').mouseenter(function(){
// 	$('.image-hover5').fadeIn('fast');
// });
// $('.category-image5').mouseleave(function(){
// 	$('.image-hover5').fadeOut('fast');
// });

// $('.category-image6').mouseenter(function(){
// 	$('.image-hover6').fadeIn('fast');
// });
// $('.category-image6').mouseleave(function(){
// 	$('.image-hover6').fadeOut('fast');
// });

// $('.category-image7').mouseenter(function(){
// 	$('.image-hover7').fadeIn('fast');
// });
// $('.category-image7').mouseleave(function(){
// 	$('.image-hover7').fadeOut('fast');
// });

// $('.category-image8').mouseenter(function(){
// 	$('.image-hover8').fadeIn('fast');
// });
// $('.category-image8').mouseleave(function(){
// 	$('.image-hover8').fadeOut('fast');
// });

// $('.category-image9').mouseenter(function(){
// 	$('.image-hover9').fadeIn('fast');
// });
// $('.category-image9').mouseleave(function(){
// 	$('.image-hover9').fadeOut('fast');
// });

// $('.category-image10').mouseenter(function(){
// 	$('.image-hover10').fadeIn('fast');
// });
// $('.category-image10').mouseleave(function(){
// 	$('.image-hover10').fadeOut('fast');
// });

// $('.category-image11').mouseenter(function(){
// 	$('.image-hover11').fadeIn('fast');
// });
// $('.category-image11').mouseleave(function(){
// 	$('.image-hover11').fadeOut('fast');
// });

// $('.category-image12').mouseenter(function(){
// 	$('.image-hover12').fadeIn('fast');
// });
// $('.category-image12').mouseleave(function(){
// 	$('.image-hover12').fadeOut('fast');
// });

// $('.category-image13').mouseenter(function(){
// 	$('.image-hover13').fadeIn('fast');
// });
// $('.category-image13').mouseleave(function(){
// 	$('.image-hover13').fadeOut('fast');
// });

// $('.category-image14').mouseenter(function(){
// 	$('.image-hover14').fadeIn('fast');
// });
// $('.category-image14').mouseleave(function(){
// 	$('.image-hover14').fadeOut('fast');
// });

// $('.category-image15').mouseenter(function(){
// 	$('.image-hover15').fadeIn('fast');
// });
// $('.category-image15').mouseleave(function(){
// 	$('.image-hover15').fadeOut('fast');
// });

// $('.category-image16').mouseenter(function(){
// 	$('.image-hover16').fadeIn('fast');
// });
// $('.category-image16').mouseleave(function(){
// 	$('.image-hover16').fadeOut('fast');
// });

// $('.category-image17').mouseenter(function(){
// 	$('.image-hover17').fadeIn('fast');
// });
// $('.category-image17').mouseleave(function(){
// 	$('.image-hover17').fadeOut('fast');
// });

// $('.category-image18').mouseenter(function(){
// 	$('.image-hover18').fadeIn('fast');
// });
// $('.category-image18').mouseleave(function(){
// 	$('.image-hover18').fadeOut('fast');
// });

// $('.category-image19').mouseenter(function(){
// 	$('.image-hover19').fadeIn('fast');
// });
// $('.category-image19').mouseleave(function(){
// 	$('.image-hover19').fadeOut('fast');
// });



/******* End of Document *******/
});