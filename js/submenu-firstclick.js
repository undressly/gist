$('.navigation__item--subtitle').click(function(){
    if ($(window).width() <= 800 && $(this).data('open') != 1) {
        event.preventDefault();
        $(this).find('.navigation__sublist').slideDown();
        $(this).data('open', 1);
    }
});
