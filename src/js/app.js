import $ from 'jquery';
import FastClick from 'fastclick';
import is from 'is_js';

$(() => {

    (($) => {
        /**
         ====================================================
         DEV pagelist
         ====================================================
         **/

        let $debugPanel = $('.b-debug-pagelist');

        $debugPanel.find('.b-debug-pagelist__btn').on('click', () => {
            $debugPanel.toggleClass('active');
        });

        // let clickTimer = null;
        //
        // $(document).on('touchstart', () => {
        //     if (clickTimer === null)
        //         clickTimer = setTimeout(() => { clickTimer = null; }, 200);
        //     else {
        //         clearTimeout(clickTimer);
        //         clickTimer = null;
        //         $('.b-debug-pagelist').fadeToggle(200);
        //     }
        // });
    })($);

});

FastClick.attach(document.body);

/**
 ====================================================
 Touch :hover hack
 ====================================================
 **/

if ( is.not.desktop() ) {
    $('html').addClass('is-touch');
    $('body').attr('ontouchstart', '');
} else {
    $('html').addClass('is-notouch');
}
