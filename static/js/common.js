$(function () {

	var mySwitchersActive = false;

	$('#study').on('click', function() {
	   mySwitchersActive = true;
	   $('.js-cover-interactive').addClass('visible');
	});

	$('#read').on('click', function() {
	   mySwitchersActive = false;
	   $('.js-cover-interactive').removeClass('visible');
	   $('.js-description-switcher').removeClass('interactive');
	   $('.js-desctiption-body').removeClass('hidden');
	   $('.js-btn-cover-switcher').addClass('hidden');
	});


	$('.js-cover-interactive').on('click', function() {
	  if (mySwitchersActive) {
	  		var $this=$(this);
	  		$this.removeClass('visible');
	  		$this.parents('.js-parent-section').find('.js-description-switcher').addClass('interactive');
			$this.parents('.js-parent-section').find('.js-desctiption-body').addClass('hidden');
	  		$this.parents('.js-parent-section').find('.js-btn-cover-switcher').removeClass('hidden');
		}
	});

	$('.js-description-switcher').on('click', function() {
	  if (mySwitchersActive) {
	  		var $this=$(this);
			$this.parents('.js-parent-section').find('.js-desctiption-body').toggleClass('hidden');
		}
	});

	$('.js-btn-cover-switcher').on('click', function() {
	  if (mySwitchersActive) {
	  		var $this=$(this);
			$this.parents('.js-parent-section').find('.js-cover-interactive').addClass('visible');
		}
	});

});

