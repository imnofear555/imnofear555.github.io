$(window).scroll(function(){
    if ($(window).scrollTop() > 30) {
        $('.navigat').addClass('scroll');
    }
    else {
        $('.navigat').removeClass('scroll')
    }
});