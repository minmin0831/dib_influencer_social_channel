// headers
$('.header__menu>a').on('click', function () {
  $('.header__mene>a').removeClass('current');
  $(this).addClass('current');
});