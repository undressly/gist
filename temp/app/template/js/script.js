function toggleHeader() {
    $('body').toggleClass('_overflow');
    $('.header__toggle').toggleClass('_open');
    $('.header__info').toggleClass('_open');
    $('.overlay').fadeToggle().toggleClass('_header');
}

function closeHeader() {
    $('body').removeClass('_overflow');
    $('.header__toggle').removeClass('_open');
    $('.header__info').removeClass('_open');
    $('.overlay._header').fadeOut().removeClass('_header');
}

$(function(){
    $('.header__toggle').click(function(){
        toggleHeader();
    });

    $('body').on('click', '.overlay._header', function() {
        closeHeader();
    });

    $(window).resize(function() {
        if ($(this).width() > 850 && $('.header__info').hasClass('_open')) {
            closeHeader()
        }
    });

    $('.js-phone').inputmask("+7 (999) 999-99-99");
});
