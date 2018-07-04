$(function () {
    // $('.portfolio .list-portfolio li a').hover(
    //     function(){
    //         $(this).find('.portfolio-details').addClass('active');
    //     },
    //     function(){
    //         $(this).find('.portfolio-details').removeClass('active');
    //     }
    // );

    $('#aboutNav').on('click', e => {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('#about').offset().top - $('.header').innerHeight()
        }, 500);
    });

    $('#portfolioNav').on('click', e => {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('#portfolio').offset().top - $('.header').innerHeight()
        }, 500);
    });

    $('#contactNav').on('click', e => {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('#contact').offset().top - $('.header').innerHeight()
        }, 500);
    });
});