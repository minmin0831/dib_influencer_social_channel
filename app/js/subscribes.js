var index;

// $('.subscribe_menu>span').click(function () {
//   index = $(this).index();
//   $('.subscribe_menu>span').css('color', '#c17bda');
//   $('.subscribe_menu>span').eq(index).css('color', 'white');
// });

$('.subscribe_menu>span').first().addClass('current');

$('.subscribe_menu>span').on('click', function () {
  $('.subscribe_menu>span').removeClass('current');
  $(this).addClass('current');
  //$(this).toggleClass('current');
});