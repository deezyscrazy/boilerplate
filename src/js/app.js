import $ from 'jquery';
import FastClick from 'fastclick';
import is from 'is_js';

$(() => {
    /**
     * DEV pagelist
     */
    (($) => {
        let $debugPanel = $('.b-debug-pagelist');

        $debugPanel.find('.b-debug-pagelist__btn').on('click', () => {
            $debugPanel.toggleClass('active');
        });
    })($);
});

(() => {
    let className = is.not.desktop() ? 'is-touch' : 'is-notouch';
    document.body.setAttribute('ontouchstart', '');
    document.querySelector('html').classList.add(className);
    FastClick.attach(document.body);
})();
