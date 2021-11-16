$(document).ready(() => {
    $('.js-menu__nav-opener').on('click', function () {
        if($('.header__burger').hasClass('active')) {
            $('.header__burger').removeClass('active');
        } else {
            $('.header__burger').addClass('active');
        }
    })
});