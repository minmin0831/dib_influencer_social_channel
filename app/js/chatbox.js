// messanger_box hide (default)
$('.messanger_box').css('display', 'none');

var chatbox_sw = false;
$('.messanger svg path').click(function () {
  if (chatbox_sw) {
    $('.messanger svg path').removeClass('active');
    $('.messanger_box').hide();
    chatbox_sw = false;
  } else {
    $('.messanger svg path').addClass('active');
    $('.messanger_box').show();
    chatbox_sw = true;
  }
});
