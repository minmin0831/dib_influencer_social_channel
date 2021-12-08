
$('.content1').css('left', 0);
$('.content2').css('left', 50);
$('.content3').css('left', 100);
$('.content4').css('left', 200);
$('.content5').css('right', 100);
$('.content6').css('right', 50);
$('.content7').css('right', 0);

var thumbnails = ['among_us_profile.png', 'image-plane.jpg', 'NBA_broadcasting.png', 'Tesladay.png', '90pop.png', 'image-restaurant.jpg', 'image-currency.jpg'];

$.each(thumbnails, function (index, value) {
  $('.carousel').find('.thumbnail').eq(index).css('background-image', 'url(/images/' + thumbnails[index] + ')');
});

// 마지막 배열위치에 있는 값을 맨 앞으로 이동 
$('.prev_button').click(function () {
  var temp = thumbnails[thumbnails.length - 1];
  console.log(temp);
  thumbnails.pop();
  console.log(thumbnails);
  thumbnails.unshift(temp);
  console.log(thumbnails);
  $.each(thumbnails, function (index, value) {
    $('.carousel').find('.thumbnail').eq(index).css('background-image', 'url(/images/' + thumbnails[index] + ')');
  });
});

// 맨 배열위치에 있는 값을 맨 뒤로 이동 
$('.next_button').click(function () {
  var temp = thumbnails[0];
  console.log(temp);
  thumbnails.shift();
  console.log(thumbnails);
  thumbnails.push(temp);
  console.log(thumbnails);
  $.each(thumbnails, function (index, value) {
    $('.carousel').find('.thumbnail').eq(index).css('background-image', 'url(/images/' + thumbnails[index] + ')');
  });
});

// var index = 0;
// var content1 = parseInt($('.content1').css('left'));
// var content2 = parseInt($('.content2').css('left'));
// var content3 = parseInt($('.content3').css('left'));
// var content4 = parseInt($('.content4').css('left'));
// var content5 = parseInt($('.content5').css('left'));
// var content6 = parseInt($('.content6').css('left'));
// var content7 = parseInt($('.content7').css('left'));

// $('.prev_button').click(function () {
//   index--;

//   content1 += 200;
//   content2 += 200;
//   content3 += 200;
//   content4 += 200;
//   content5 += 200;
//   content6 += 200;
//   content7 += 200;

//   $('.content1').animate({
//     left: content1
//   }, 'fast');
//   $('.content2').animate({
//     left: content2
//   }, 'fast');
//   $('.content3').animate({
//     left: content3
//   }, 'fast');
//   $('.content4').animate({
//     left: content4
//   }, 'fast');
//   $('.content5').animate({
//     left: content5
//   }, 'fast');
//   $('.content6').animate({
//     left: content6
//   }, 'fast');
//   $('.content7').animate({
//     left: content7
//   }, 'fast');
// }).stop();

// $('.next_button').click(function () {
//   content1 -= 200;
//   content2 -= 200;
//   content3 -= 200;
//   content4 -= 200;
//   content5 -= 200;
//   content6 -= 200;
//   content7 -= 200;

//   $('.content1').animate({
//     left: content1
//   }, 'fast');
//   $('.content2').animate({
//     left: content2
//   }, 'fast');
//   $('.content3').animate({
//     left: content3
//   }, 'fast');
//   $('.content4').animate({
//     left: content4
//   }, 'fast');
//   $('.content5').animate({
//     left: content5
//   }, 'fast');
//   $('.content6').animate({
//     left: content6
//   }, 'fast');
//   $('.content7').animate({
//     left: content7
//   }, 'fast');
// }).stop();