$(document).ready(function(){

    // Smooth scroll and pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('.page_up').fadeIn();
        } else {
            $('.page_up').fadeOut();
        }
    });

    $("a[href=#]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});