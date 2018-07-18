function upButton() {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
        $(".up-button").addClass("_active").fadeIn();
    } else {
        $(".up-button").removeClass("_active").fadeOut();
    }
}

$(function(){
	upButton();

	$('.up-button').click(function(){
	    $('html,body').animate({'scrollTop' : 0}, 300);
	});
});

$(document).scroll(function(){
	upButton();
});
