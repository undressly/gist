(function($){
	$.fn.arrowSlider = function(settings) {
        var sliderWrap = settings.sliderWrapClass;
        var sliderItem = settings.sliderItemClass;
        var sliderArrow = settings.sliderArrowClass;
		var sliderViewport = settings.sliderViewportClass;

		var slider = function() {
            function arrowSliderLeft(){
                var itemWidth = $(sliderItem).outerWidth(true);
				var viewportWidth = $(sliderViewport).outerWidth(true);
				var itemCount = Math.round(viewportWidth / itemWidth);
                if ($(sliderWrap).css('left') != '0px') return;
                $(sliderWrap).css('left' , -itemWidth);
                $(sliderItem).last().clone().prependTo(sliderWrap);
				$(sliderItem).eq(itemCount).animate({'opacity' : 0}, 500);
                $(sliderWrap).animate({'left' : '0px'}, 500, function(){
                    $(sliderItem).css('opacity', 1).last().remove();
                });
            }

            function arrowSliderRight(){
                var itemWidth = $(sliderItem).outerWidth(true);
                if ($(sliderWrap).css('left') != '0px') return;
                $(sliderItem).first().clone().appendTo(sliderWrap);
				$(sliderItem).first().animate({'opacity' : 0}, 500);
                $(sliderWrap).animate({'left' : -itemWidth}, 500, function(){
                    $(sliderWrap).css('left' , '0px');
                    $(sliderItem).css('opacity', 1).first().remove();
                });
            }

            $(sliderArrow).click(function(){
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
		'sliderWrapClass': '.banner__wrap',
		'sliderItemClass': '.banner__item',
		'sliderArrowClass': '.banner__control',
		'sliderViewportClass': '.banner__slider'
	});
});
