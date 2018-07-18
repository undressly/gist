(function($){
	$.fn.dotSlider = function(settings) {
		var settings = $.extend( {
			'sliderWrapClass': 'slider__wrap',
			'sliderItemClass': 'slider__item',
			'sliderItemWrapClass': 'slider__item-wrap',
			'sliderDotsClass': 'slider__dots',
			'sliderDotClass': 'slider__dot',
			'sliderMultiWrap': 'false'
		}, settings);

		var slider = function() {
			function dotSliderInit() {
				$('.' + settings.sliderItemClass).each(function(){
					var slideIndex = $(this).index();
					$(this).addClass('_' + slideIndex);
				});

				var count = $('.' + settings.sliderItemClass).length;
				for( i = 0; i < count; i++)
					$('.' + settings.sliderDotsClass).append('<button class="' + settings.sliderDotClass + ' controls__dot" type="button"></button>');
				$('.' + settings.sliderDotClass).first().addClass('_active');
				$('.' + settings.sliderItemClass).first().addClass('_active');
			}

			function dotSliderInitMulti() {
				var count = Math.ceil($('.' + settings.sliderWrapClass + ' > .' + settings.sliderItemClass).length / 3);
				for( i = 0; i < count; i++) {
					$('.' + settings.sliderDotsClass).append('<button class="' + settings.sliderDotClass + ' controls__dot" type="button"></button>');
			        $('.' + settings.sliderWrapClass).append('<div class="' + settings.sliderItemWrapClass + '"></div>');
			        $('.' + settings.sliderWrapClass + ' > .' + settings.sliderItemClass + ':lt("3")').appendTo('.' + settings.sliderItemWrapClass + ':last');
				}
				$('.' + settings.sliderDotClass).first().addClass('_active');
				$('.' + settings.sliderItemWrapClass).first().addClass('_active');

			    $('.' + settings.sliderItemWrapClass).each(function(){
			        var slideIndex = $(this).index();
			        $(this).addClass('_' + slideIndex);
			    });
			}

			function dotSliderLeft(){
				if (settings.sliderMultiWrap == 'true') {
					var item_width = $('.' + settings.sliderItemWrapClass).outerWidth(true);
				} else {
					var item_width = $('.' + settings.sliderItemClass).outerWidth(true);
				}
				if ($('.' + settings.sliderWrapClass).css('left') != '0px') return;
				$('.' + settings.sliderWrapClass).css('left' , -item_width);
				$('.' + settings.sliderWrapClass).animate({'left' : '0px'}, 500);
			}

			function dotSliderRight(){
				if (settings.sliderMultiWrap == 'true') {
					var item_width = $('.' + settings.sliderItemWrapClass).outerWidth(true);
				} else {
					var item_width = $('.' + settings.sliderItemClass).outerWidth(true);
				}
				if ($('.' + settings.sliderWrapClass).css('left') != '0px') return;
				$('.' + settings.sliderWrapClass).animate({'left' : -item_width}, 500, function(){
					if (settings.sliderMultiWrap == 'true') {
						$('.' + settings.sliderItemWrapClass).first().detach().appendTo('.' + settings.sliderWrapClass);
					} else {
						$('.' + settings.sliderItemClass).first().detach().appendTo('.' + settings.sliderWrapClass);
					}
					$('.' + settings.sliderWrapClass).css('left' , '0px');
				});
			}

			if (settings.sliderMultiWrap == 'true') {
				dotSliderInitMulti();
			} else {
				dotSliderInit();
			}

			$('.' + settings.sliderDotClass).click(function(){
				if ($(this).hasClass('_active')) return;
				if ($('.' + settings.sliderWrapClass).css('left') != '0px') return;
				var slideIndex = $(this).index();
				var slideActiveIndex = $('.' + settings.sliderDotClass + '._active').index();
				if (settings.sliderMultiWrap == 'true') {
					if (slideIndex > slideActiveIndex){
						$('.' + settings.sliderItemWrapClass + '._' + slideIndex).insertAfter('.' + settings.sliderItemWrapClass + '._active');
						dotSliderRight();
					} else {
						$('.' + settings.sliderItemWrapClass + '._' + slideIndex).insertBefore('.' + settings.sliderItemWrapClass + '._active');
						dotSliderLeft();
					}
					$('.' + settings.sliderItemWrapClass + '._active').removeClass('_active');
					$('.' + settings.sliderItemWrapClass + '._' + slideIndex).addClass('_active');
				} else {
					if (slideIndex > slideActiveIndex){
						$('.' + settings.sliderItemClass + '._' + slideIndex).insertAfter('.' + settings.sliderItemClass + '._active');
						dotSliderRight();
					} else {
						$('.' + settings.sliderItemClass + '._' + slideIndex).insertBefore('.' + settings.sliderItemClass + '._active');
						dotSliderLeft();
					}
					$('.' + settings.sliderItemClass + '._active').removeClass('_active');
					$('.' + settings.sliderItemClass + '._' + slideIndex).addClass('_active');
				}

				$('.' + settings.sliderDotClass + '._active').removeClass('_active');
				$(this).addClass('_active');
			});
		};

		return this.each(slider);
	}
})(jQuery);

$(function(){
	$('.main-slider').dotSlider({
		'sliderWrapClass': 'main-slider__wrap',
		'sliderItemClass': 'main-slider__item',
		'sliderDotsClass': 'main-slider__dots',
		'sliderDotClass': 'main-slider__dot'
	});

	$('.reviews__slider').dotSlider({
		'sliderWrapClass': 'reviews__wrap',
		'sliderItemClass': 'reviews__item',
		'sliderDotsClass': 'reviews__dots',
		'sliderDotClass': 'reviews__dot',
		'sliderMultiWrap': 'true',
		'sliderItemWrapClass': 'reviews__item-wrap'
	});
});
