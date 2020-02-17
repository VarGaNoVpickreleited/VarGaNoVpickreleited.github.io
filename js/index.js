let pos = 0;

$('.slider-control__item').click(function() {
    $(this).addClass('slider-control__item_active');
    $(this).siblings().removeClass('slider-control__item_active');
    pos = $(this).data('pos');
    $('.slider__items').animate({
        left: '-' + pos + '00%'
    });
    $('.intro__info').animate({
        opacity: 0
    }, 100);
    if (pos == 0) {
        $('.intro__info_0').animate({
            opacity: 1
        });
    } else if (pos == 1) {
        $('.intro__info_1').animate({
            opacity: 1
        });
    } else if (pos == 2) {
        $('.intro__info_2').animate({
            opacity: 1
        });
    }
});

let next = $('.slider-arrow__item_right');
let prev = $('.slider-arrow__item_left');

function nextSlide() {
    pos++;
    if (pos >= 3) {
        pos = 0;
        $('.slider-control__item_0').addClass('slider-control__item_active');
        $('.slider-control__item_0').siblings().removeClass('slider-control__item_active');
    } else if (pos == 0) {
        $('.slider-control__item_0').addClass('slider-control__item_active');
        $('.slider-control__item_0').siblings().removeClass('slider-control__item_active');
    } else if (pos == 1) {
        $('.slider-control__item_1').addClass('slider-control__item_active');
        $('.slider-control__item_1').siblings().removeClass('slider-control__item_active');
    } else if (pos == 2) {
        $('.slider-control__item_2').addClass('slider-control__item_active');
        $('.slider-control__item_2').siblings().removeClass('slider-control__item_active');
    }
    $('.slider__items').animate({
        left: '-' + pos + '00%'
    });
    $('.intro__info').animate({
        opacity: 0
    }, 100);
    if (pos == 0) {
        $('.intro__info_0').animate({
            opacity: 1
        });
    } else if (pos == 1) {
        $('.intro__info_1').animate({
            opacity: 1
        });
    } else if (pos == 2) {
        $('.intro__info_2').animate({
            opacity: 1
        });
    }
}

next.click(function() {
    nextSlide();
});

setInterval(function() {
    nextSlide();
}, 8000);

prev.click(function() {
    pos--;
    if (pos < 0) {
        pos = 2;
        $('.slider-control__item_2').addClass('slider-control__item_active');
        $('.slider-control__item_2').siblings().removeClass('slider-control__item_active');
    } else if (pos == 0) {
        $('.slider-control__item_0').addClass('slider-control__item_active');
        $('.slider-control__item_0').siblings().removeClass('slider-control__item_active');
    } else if (pos == 1) {
        $('.slider-control__item_1').addClass('slider-control__item_active');
        $('.slider-control__item_1').siblings().removeClass('slider-control__item_active');
    } else if (pos == 2) {
        $('.slider-control__item_2').addClass('slider-control__item_active');
        $('.slider-control__item_2').siblings().removeClass('slider-control__item_active');
    }
    $('.slider__items').animate({
        left: '-' + pos + '00%'
    });
    $('.intro__info').animate({
        opacity: 0
    }, 100);
    if (pos == 0) {
        $('.intro__info_0').animate({
            opacity: 1
        });
    } else if (pos == 1) {
        $('.intro__info_1').animate({
            opacity: 1
        });
    } else if (pos == 2) {
        $('.intro__info_2').animate({
            opacity: 1
        });
    }
});

$('.btn-call-me').click(function(e) {
    e.preventDefault();
    $('.call-me-wrapper').css('display', 'flex');
});

$('.form__close').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().parent().hide();
});

$('.form__close-btn').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().parent().hide();
});

$('.form__phone').mask("+7 (999) 999-99-99");

$('.form__input').focus(function() {
    $(this).next().addClass('form__placeholder_active');
});

$('.form__input').blur(function() {
    if ($(this).val() == '') {
        $(this).next().removeClass('form__placeholder_active');
    }
});

$("#call-me").submit(function(e) {
    e.preventDefault();
    let data = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: 'call-me.php',
        data: data,
                success: function(data){
                console.log('Отправлено');
            }
    });
    $(this).parent().parent().hide();
});

$('.btn-request').click(function(e) {
    $('.form__subtitle').text('');
    e.preventDefault();
    $('.request-wrapper').css('display', 'flex');
});

$('.programs-btn').click(function(e) {
    let subtitle = $(this).parent().parent().find('.programs__name').text();
    $('.form__subtitle').text(subtitle);
    e.preventDefault();
    $('.request-wrapper').css('display', 'flex');
});

$('.programs-techno').click(function(e) {
    let subtitle = $(this).parent().parent().find('.programs__name').text();
    $('.form__subtitle').text(subtitle);
    e.preventDefault();
    $('.request-wrapper-techno').css('display', 'flex');
});

$('.programs-ecolog').click(function(e) {
    let subtitle = $(this).parent().parent().find('.programs__name').text();
    $('.form__subtitle').text(subtitle);
    e.preventDefault();
    $('.request-wrapper-ecolog').css('display', 'flex');
});

$('.programs-emercom').click(function(e) {
    let subtitle = $(this).parent().parent().find('.programs__name').text();
    $('.form__subtitle').text(subtitle);
    e.preventDefault();
    $('.request-wrapper-emercom').css('display', 'flex');
});

$('.programs-emercom__terror').click(function(e) {
    let subtitle = $(this).parent().parent().find('.programs__name').text();
    $('.form__subtitle').text(subtitle);
    e.preventDefault();
    $('.request-wrapper-emercom__terror').css('display', 'flex');
});

$('.programs-accountant').click(function(e) {
    let subtitle = $(this).parent().parent().find('.programs__name').text();
    $('.form__subtitle').text(subtitle);
    e.preventDefault();
    $('.request-wrapper-accountant').css('display', 'flex');
});

$('.programs-public-cell').click(function(e) {
    let subtitle = $(this).parent().parent().find('.programs__name').text();
    $('.form__subtitle').text(subtitle);
    e.preventDefault();
    $('.request-wrapper-public-cell').css('display', 'flex');
});

$('.programs-military').click(function(e) {
    let subtitle = $(this).parent().parent().find('.programs__name').text();
    $('.form__subtitle').text(subtitle);
    e.preventDefault();
    $('.request-wrapper-military').css('display', 'flex');
});

$("#request").submit(function(e) {
    e.preventDefault();
    let data = $(this).serialize();
    let subtitle = $('.form__subtitle').text()
    if ($(this).find('.form__subtitle').text() != '') {
        $.ajax({
            type: 'POST',
            url: 'request.php',
            data: data + '&prof=' + subtitle,
                    success: function(data){
                    console.log('Отправлено');
                }
        });
    } else {
        $.ajax({
            type: 'POST',
            url: 'request.php',
            data: data,
                    success: function(data){
                    console.log('Отправлено');
                }
        });
    }
    $(this).parent().parent().hide();
});

if ($('*').is('.search-input')) {
    $('.search-input').jcOnPageFilter({
        parentSectionClass:'programs__items',
        parentLookupClass:'programs__item',
        childBlockClass:'programs__name',
    });
}

$('.btn-nav-mobile').click(function(e) {
    e.preventDefault();
    $('.header-mobile').addClass('header-mobile_active');
});

$('.btn-nav-mobile-close').click(function(e) {
    e.preventDefault();
    $('.header-mobile').removeClass('header-mobile_active');
});