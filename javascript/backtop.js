$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backend').fadeIn();
        } else {
            $('#backend').fadeOut();
        }
    });
    $("#backend").click(function(){
        $('html, body').animate({scrollTop: 0},1000);
    });
});