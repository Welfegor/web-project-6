$(function() {
  $('.menu-button').click(function() {
    $('.content').slideToggle();
  });
});

//Chrome
$('.content').bind('mousewheel', function (e) {
    $(this).scrollTop($(this).scrollTop() - e.originalEvent.wheelDeltaY);
    //prevent page fom scrolling
    return false;
});