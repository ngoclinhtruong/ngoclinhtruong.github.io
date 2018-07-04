$(function(){
    $('#aboutNav').on('click', (e) => {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('#about').offset().top - $('.header').innerHeight()
        }, 500);
    });

    $('#portfolioNav').on('click', (e) => {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('#portfolio').offset().top - $('.header').innerHeight()
        }, 500);
    });

    $('#contactNav').on('click', (e) => {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('#contact').offset().top - $('.header').innerHeight()
        }, 500);
    });
});
