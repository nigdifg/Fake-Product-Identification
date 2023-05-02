(function($) {

	"use strict";

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

})(jQuery);
function closeForm() {
	$('.form-popup-bg').removeClass('is-visible');
  }
  
  $(document).ready(function($) {
	
	/* Contact Form Interactions */
	$('#btnOpenForm').on('click', function(event) {
	  event.preventDefault();
  
	  $('.form-popup-bg').addClass('is-visible');
	});
	
	  //close popup when clicking x or off popup
	$('.form-popup-bg').on('click', function(event) {
	  if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
		event.preventDefault();
		$(this).removeClass('is-visible');
	  }
	});
	
	
	
	});
  