$('#intresectLogo').addClass('animated rotateIn');
$('#intresectHeadline').addClass('animated fadeInUp');
$('#intresectHeadline').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	$('#intresectSubline').css('opacity', '1.0');
	$('#intresectSubline').addClass('animated fadeIn');
	// $('#intresectWord').css('color', '#E27450');
});

$('.navButton').hover(function() {
	$(this).css('color', '#080808');
});
$('.navButton').mouseout(function() {
	$(this).css('color', '#F5F5F5');
});

var distance = $('#navBar').offset().top;
var dBottom = $('#navBar').offset().bottom;

$(window).scroll(function() {

    if ($(window).scrollTop() >= distance) {
        $('#navBar').css('position', 'fixed');
        $('#navBar').css('background-color', 'rgba(245, 245, 245, 0.75');
        $('.navButton').css('color', '#080808');
        $('.navButton').hover(function() {
			$(this).css('color', '#18AFF5');
		});
		$('.navButton').mouseout(function() {
			$(this).css('color', '#080808');
		});
    }
    else {
    	$('#navBar').css('position', 'static');
    	$('#navBar').css('background-color', 'rgba(65, 185, 224, 0.75)');
    	$('.navButton').css('color', '#F5F5F5');
        $('.navButton').hover(function() {
			$(this).css('color', '#080808');
		});
		$('.navButton').mouseout(function() {
			$(this).css('color', '#F5F5F5');
		});
    }
});