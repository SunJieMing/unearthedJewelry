'use strict';
$(document).ready(function() {
	console.log("This is the document.ready function");

     $('.menu-btn').click(function(){
     	$('.responsive-menu').toggleClass('expand')
     	console.log("You are clicking the Menu Button");
     })
   
});