$('a[href^="#"]').click(function(){

var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');

return false;});

function cssParallax(cont, el, radiusVal){
  $(cont).mousemove(function(event) {
      
      cx = Math.ceil($(window).width() / 1.0);
      cy = Math.ceil($(window).height() / 1.0);
      dx = event.pageX - cx;
      dy = event.pageY - cy;
      
      tiltx = (dy / cy);
      tilty = - (dx / cx);
      radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
      degree = (radius * radiusVal);

      $(el, cont).css('-webkit-transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
      $(el, cont).css('transform','rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
  });
}

$(document).ready(function() {


	if ( $(window).width() > 768 ) {

	  cssParallax('.guru-parallax', '.parallax-base', 6);
	  cssParallax('.meditate', '.parallax-base', 6);

	  $('.caption').mouseover(function() {
	  	$('.caption-active').fadeOut();
	  	$('.caption-active-'+$(this).attr('data-caption')).fadeIn();
	  });

	} else {

	}

});