$(window).scroll(function(){
    if ($(window).scrollTop() > 1000) {
        $('.top_btn').addClass('active_btn');
    }
    else {
        $('.top_btn').removeClass('active_btn')
    }
});

$('document').ready( function(){
  $('#port1').click( function(){
    $('.front').toggleClass('active');
    $('.back').toggleClass('active');
  });
});

$('document').ready(function () {
  $('.front').mouseenter(function() {
    $('.manual').css({
                      'background':'green',
                      'opacity':'0.9',
                      'transform': 'rotateX(0deg)'
                    });
  })
});

$('document').ready(function () {
  $('.front').mouseout(function() {
    $('.manual').css({
                      'opacity':'0',
                      'transform':'rotateX(90deg)'
                    });
  })
});