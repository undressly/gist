$(function(){
	$('.menu__link').click(function(){
		link_attr = $(this).data('index');
		block_index = $('.section').eq(link_attr).offset().top - $('.page-header__logo-wrapper').height();
		$("html, body").animate({ scrollTop: block_index }, 600);
	});

	var coords = [];
	$('.menu__link').each(function(){
		coords.push($($(this).attr('href')).offset().top - $('.page-header__logo-wrapper').height());
	});
	coords.push(99999);

	$(window).scroll(function(){
		scroll = $(this).scrollTop();
		if (scroll < coords[0])
			$('.menu__link').removeClass('_active');
		for (i=0;i<=10;i++)
			if ((scroll >= coords[i]) && (scroll < coords[i+1]))
				if (!$('.menu__link').eq(i).hasClass('_active')) {
					$('.menu__link._active').removeClass('_active');
					$('.menu__link').eq(i).addClass('_active');
				}
			});
	$(window).scroll();
});