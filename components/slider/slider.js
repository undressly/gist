(function($){
	$.fn.arrowSlider = function(settings) {
        var sliderWrap = settings.sliderWrapClass;
        var sliderItem = settings.sliderItemClass;
        var sliderArrow = settings.sliderArrowClass;
		var sliderSlideOpacity = settings.sliderSlideOpacity;
		var sliderViewport = settings.sliderViewportClass;

		var slider = function() {
            function arrowSliderLeft(){
                var itemWidth = $(sliderItem).outerWidth(true);
				var viewportWidth = $(sliderViewport).outerWidth(true);
				if ($(sliderWrap).css('left') != '0px') return;
				$(sliderWrap).css('left' , -itemWidth);
				$(sliderItem).last().clone().prependTo(sliderWrap);
				if (sliderSlideOpacity) {
					var itemCount = Math.round(viewportWidth / itemWidth);
					$(sliderItem).eq(itemCount).animate({'opacity' : 0}, 500);
				}
                $(sliderWrap).animate({'left' : '0px'}, 500, function(){
					if (sliderSlideOpacity) {
						$(sliderItem).css('opacity', 1).last().remove();
					} else {
						$(sliderItem).last().remove();
					}
                });
            }

            function arrowSliderRight(){
                var itemWidth = $(sliderItem).outerWidth(true);
                if ($(sliderWrap).css('left') != '0px') return;
                $(sliderItem).first().clone().appendTo(sliderWrap);
				if (sliderSlideOpacity) {
					$(sliderItem).first().animate({'opacity' : 0}, 500);
				}
                $(sliderWrap).animate({'left' : -itemWidth}, 500, function(){
                    $(sliderWrap).css('left' , '0px');
					if (sliderSlideOpacity) {
						$(sliderItem).css('opacity', 1).first().remove();
					} else {
						$(sliderItem).first().remove();
					}
                });
            }

			$('body').on('click', sliderArrow, function(){
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
	$('.banner__slider').arrowSlider({
		'sliderViewportClass': '.banner__slider'
		'sliderWrapClass': '.banner__wrap',
		'sliderItemClass': '.banner__item',
		'sliderArrowClass': '.banner__control',
		'sliderSlideOpacity': false,
	});
});
