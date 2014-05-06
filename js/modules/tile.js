//define(['jquery'], function($) {
//listen for when a tile is clicked
//retrieve the type of page it opens from its data attribute
//based on the type of page, add corresponding class to page and fade the dashboard
/*    $('.tile').each(function () {
        var $this = $(this),
            pageType = $this.data('page-type'),
            page = $this.data('page-name');

        $this.on('click', function () {
            if (pageType === "s-page") {
                fadeDashBoard();
                $('.' + page).addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
            }
            else {
                $('.' + page).addClass('openpage');
                fadeDashBoard();
            }
        });
    });

    function showDashBoard() {
//        for(var i = 1; i <= 3; i++) {
//            $('.col'+i).each(function(){
            $('.row').each(function () {
                $(this).addClass('fadeInForward-1').removeClass('fadeOutback');
            });
//        }
    }

    function fadeDashBoard(){
        $('.row').each(function () {
            $('.row').addClass('fadeOutback').removeClass('fadeInForward-1');
        });
//        for(var i = 1; i <= 3; i++) {
//            $('.col'+i).addClass('fadeOutback').removeClass('fadeInForward-'+i);
//        }
    }*/
//});