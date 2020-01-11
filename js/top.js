jQuery(function($){
    $('.slider').each(function(){
		$(this).slick({
			autoplay:true,
			autoplaySpeed:2000,
			dots:true,
      slidesToShow: 2,
      slidesToScroll: 1,
		});
	});
});
//

jQuery(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
});
