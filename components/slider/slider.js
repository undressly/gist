(function($){
	$.fn.arrowSlider = function(settings) {
		var settings = $.extend( {
			'sliderWrapClass': 'slider__wrap',
			'sliderItemClass': 'slider__item',
			'sliderArrowClass': 'slider__arrow',
		}, settings);

		var slider = function() {
            function arrowSliderLeft(){
                var itemWidth = $('.' + settings.sliderItemClass).outerWidth(true);
                if ($('.' + settings.sliderWrapClass).css('left') != '0px') return;
                $('.' + settings.sliderWrapClass).css('left' , -itemWidth);
                $('.' + settings.sliderItemClass).last().clone().prependTo('.' + settings.sliderWrapClass);
                $('.' + settings.sliderWrapClass).animate({'left' : '0px'}, 500, function(){
                    $('.' + settings.sliderItemClass).last().remove();
                });
            }

            function arrowSliderRight(){
                var itemWidth = $('.' + settings.sliderItemClass).outerWidth(true);
                if ($('.' + settings.sliderWrapClass).css('left') != '0px') return;
                $('.' + settings.sliderItemClass).first().clone().appendTo('.' + settings.sliderWrapClass);
                $('.' + settings.sliderWrapClass).animate({'left' : -itemWidth}, 500, function(){
                    $('.' + settings.sliderWrapClass).css('left' , '0px');
                    $('.' + settings.sliderItemClass).first().remove();
                });
            }

            $('.' + settings.sliderArrowClass).click(function(){
                if ($(this).hasClass('_left')) {
                    arrowSliderLeft();
                } else if ($(this).hasClass('_right')) {
                    arrowSliderRight();
                }
            });
		};

		return this.each(slider);
	}
})(jQuery);

$(function(){
	$('.main-slider').arrowSlider({
		'sliderWrapClass': 'main-slider__wrap',
		'sliderItemClass': 'main-slider__item',
		'sliderArrowClass': 'main-slider__arrow',
	});
});
