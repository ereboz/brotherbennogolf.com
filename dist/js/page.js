(function ($) {
 "use strict";



    var loc = window.location.href.toLowerCase();
    var locPath = window.location.pathname.toLowerCase();
    var viewportWidth = $(window).width();
    var pageWrapper = "";
    var addContainer = "";




 /*----------------------------
 TOP Menu Stick
------------------------------ */
$(window).on('scroll',function() {
if ($(this).scrollTop() > 120){  
    $('#header-sticky').addClass("sticky");
  }
  else{
    $('#header-sticky').removeClass("sticky");
  }
}); 


/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('#mobile-menu-active').meanmenu();
	
/*----------------------------
 wow js active
------------------------------ */
 // new WOW().init();
 

/*----------------------------
 slider-active
------------------------------ */  

 $('.slider-active').owlCarousel({
	 	autoplay:true,
	 	margin:10,
	 	nav:true,
	 	dots:true,

	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:1,

	        },
	        1000:{
	            items:1,
	        }
	    }
	})
  

	
/*----------------------------
 flexslider-slider active
------------------------------ */
	  $('.flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails"
	  });
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 