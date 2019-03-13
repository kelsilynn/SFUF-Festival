//responsive hero image and dropdown

$(document).ready(function() {
	// run test on initial page load
	checkSize();

	// run test on resize of the window
	$(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
	if ($(".footer-bg").css("background-size") == "contain"){
		$('header').css('background-image', 'inherit')
		heroZoom();
		dropDownToggle();
	} else {
		$('.health-header').css('background-image', 'auto 100%');
	}
}

function heroZoom(){
	$(window).scroll(function() {
		var scrollPos = $(this).scrollTop();
		$("header").css({
			'background-size' : 100 + scrollPos/30 + '%'
		});
	});	
}

function dropDownToggle(){
	$('nav ul li').hover(function() {
			$(this).toggleClass('top-level-open');
			$(this).children('ul').toggleClass('second-level');
	});
}

// function dropDownToggleStop();

//mobile nav menu

$('.menu-toggle').click(function() {
	$('.site-nav').toggleClass('site-nav-open');
});



//video fade in

$(function(){  // $(document).ready shorthand
	$('.video').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
	$(window).scroll( function(){
    
        /* Check the location of each desired element */
		$('.yt-video').each( function(i){
            
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
            
				/* If the object is completely visible in the window, fade it it */
				if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
  
    });
    
});
