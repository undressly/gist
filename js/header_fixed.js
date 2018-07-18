//Плавающая шапка

$(function(){
	menuPosition = $('.header__top').height() + 50;
	$(window).bind("scroll", function(){
		if ($(this).scrollTop() > menuPosition) {
			if (!$('.header__top').hasClass('_fixed')) {
				$('.header__top').addClass('_fixed');
			}
		} else {
			if ($('.header__top').hasClass('_fixed')) {
				$('.header__top').removeClass('_fixed');
			}
		}
	});
});