/* -------------- Parallax background -------------- */
function parallaxBg() {
    scrollNow = $(document).scrollTop();
    $('.banner').css('background-position', 'center ' + scrollNow / (-4.5) + 'px');

    if (scrollNow > 1150) {
        $('.background-block').css('background-position', 'center ' + (scrollNow / (-4.5) + 450) + 'px');
    }

    if (scrollNow > 2630) {
        $('.contacts').css('background-position', 'center ' + (scrollNow / (-4.5) + 750) + 'px');
    }
}

/* -------------- Current menu link on scroll -------------- */
function currentLink() {
    $('section').each(function(){
        sectionTop = $(this).offset().top - 500;
        sectionBottom = sectionTop + $(this).outerHeight();
        if (scrollNow > sectionTop && scrollNow < sectionBottom ) {
            $(this).find('.animate').removeClass('animate');
            currentData = $(this).data('block');
            $('.menu__link').each(function(){
                $(this).removeClass('_active');
                if ($(this).data('block') == currentData) {
                    $(this).addClass('_active');
                }
            });
        }
    });
}

/* -------------- Scroll to block after click menu link -------------- */
function scrollToBlock() {
    $('.menu__link').click(function(){
        datalink = $(this).data('block');
        $('section').each(function(){
            if ($(this).data('block') == datalink) {
                datablock = $(this).offset().top;
            }
        });
        $('html, body').animate({ scrollTop: datablock - 100 }, 1000);
    });
}

/* -------------- Up-button -------------- */
function upButton() {
    $('.up-button').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
}

/* -------------- Send form -------------- */
function sendForm(){
    ajaxUrl = $('.contacts-form').prop('action');

    $.ajax({
        type: "POST",
        url: ajaxUrl,
        data: $('.contacts-form').serialize(),
        success: function(data){
            $('.contacts__message').html(data);
            $('.contacts-form').trigger('reset');
        }
    });
}

/* -------------- Validation -------------- */
function validEmail() {
    validation = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (!validation.test($('._email').val())) {
        $('.contacts__message').html('Please provide a valid email');
        $('._email').addClass('_invalid');
        fullness = false;
    } else {
        $('.contacts__message').html('...').addClass('_success');
        sendForm();
    }
}

/* -------------- Contacts form -------------- */
function validationForm() {
    $('.input-submit').click(function(e){
        e.preventDefault();
        fullness = true;

        $('input[required]').each(function(){
            if($(this).val() == 0) {
                $('.contacts__message').html('Please fill in all required fields');
                $(this).addClass('_invalid');
                fullness = false;
            } else {
                $(this).removeClass('_invalid');
            }
        });

        if (fullness == true) {
            validEmail();
        }
    });
}

$(function(){
    parallaxBg();
    currentLink();
    scrollToBlock();
    upButton();
    validationForm();


    $(document).scroll(function(){
        parallaxBg();
        currentLink();
    });
});
