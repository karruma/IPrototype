define(['jquery', 'bootstrap'], function ($, _bootstrap) {

    console.log($);
    console.log('carousel bootstrap=', _bootstrap);
    $('#myCarousel').carousel({interval: false});
    /* init the carousel but don't start it */
    var myInterval = false;
    $('.carousel-control').mouseover(function () {
        var ctrl = $(this);
        var interval = 300;

        myInterval = setInterval(function () {
            ctrl.trigger("click");
        }, interval);
    });

    $('.carousel-control').mouseout(function () {
        clearInterval(myInterval);
        myInterval = false;
    });

});