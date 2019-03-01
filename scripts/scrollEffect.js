$(window).scroll(function() {
	var scrollPos = $(this).scrollTop();
	$("header").css({
		'background-size' : 100 + scrollPos + '%'
	});
});