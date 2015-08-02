$(function () {
	$('.cover').click(function(){
		$(this).nextAll('.description').removeClass('visible').addClass('hidden');
		$(this).nextAll('.gotit').removeClass('visible').addClass('hidden');
		$(this).addClass('hidden');
	});

	$('.definition').click(function(){
		$(this).next('.description').toggleClass('hidden');
		$(this).nextAll('.gotit').toggleClass('hidden');
	});

	$('.gotit').click(function(){
		$(this).prevAll('.cover').removeClass('hidden').addClass('visible');
	});

	$('#study').click(function(){
		$('.cover').removeClass('hidden').addClass('visible');
		$('.description').removeClass('visible').addClass('hidden');
		$('.gotit').removeClass('visible').addClass('hidden');
	});

	$('#read').click(function(){
		$('.cover').removeClass('visible').addClass('hidden');
		$('.description').removeClass('hidden').addClass('visible');
		$('.gotit').removeClass('hidden').addClass('visible');
	});

});

