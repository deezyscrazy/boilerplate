/**
 ====================================================
 Samples
 ====================================================
 **/

$(function(){

    /**
     ====================================================
     Price slider
     ====================================================
     **/

    // $('[data-slider]').each(function(){
    //     var $slider = $(this).find('.filter__range'),
    //         $lower = $(this).find('.filter__range-value-from span'),
    //         $upper = $(this).find('.filter__range-value-to span'),
    //         min = parseInt($(this).attr('data-slider-min')),
    //         max = parseInt($(this).attr('data-slider-max')),
    //         step = parseInt($(this).attr('data-slider-step')),
    //         priceFormat = wNumb({
    //             decimals: 0,
    //             thousand: ' '
    //         });

    //     $slider.noUiSlider({
    //         start: [ min, max ],
    //         step: step,
    //         margin: 20,
    //         connect: true,
    //         range: {
    //             'min': min,
    //             'max': max
    //         },
    //         format: priceFormat
    //     });

    //     $lower.html(priceFormat.to(min));
    //     $upper.html(priceFormat.to(max));

    //     $slider.on('slide', function(){
    //         $lower.html($slider.val()[0]);
    //         $upper.html($slider.val()[1]);
    //     });
    // });

    /**
     ====================================================
     Date picker
     ====================================================
     **/

    // jQuery.extend( jQuery.fn.pickadate.defaults, {
    //     monthsFull: [ 'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь' ],
    //     monthsShort: [ 'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек' ],
    //     weekdaysFull: [ 'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота' ],
    //     weekdaysShort: [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
    //     today: 'сегодня',
    //     clear: 'удалить',
    //     close: 'закрыть',
    //     firstDay: 1,
    //     format: 'd.mm.yyyyг.',
    //     formatSubmit: 'yyyy/mm/dd'
    // });

    // $('[date-picker]').pickadate();

    /**
     ====================================================
     Tel mask
     ====================================================
     **/

    // $('[data-masked-tel]').mask("+7 (999) 999-9999");

    /**
     ====================================================
     Pop-ups
     ====================================================
     **/

    //$.extend(true, $.magnificPopup.defaults, {
    //    tClose: 'Закрыть (Esc)',
    //    tLoading: 'Загрузка...',
    //    gallery: {
    //        tPrev: 'Назад',
    //        tNext: 'Вперед',
    //        tCounter: '%curr% из %total%'
    //    },
    //    image: {
    //        tError: 'Не удалось загрузить <a href="%url%">изображение</a>.'
    //    },
    //    ajax: {
    //        tError: 'Не удалось загрузить <a href="%url%">контент</a>.'
    //    }
    //});
    //
    //$('[data-popup]').magnificPopup({
    //    type:'inline',
    //    midClick: true
    //});
    //
    //$('[data-lightbox]').magnificPopup({
    //    type: 'image',
    //    //closeMarkup: '<button title="%title%" class="mfp-close mfp-close-gallery"><i class="mfp-close-icn">&times;</i></button>',
    //    gallery: {
    //        enabled: true
    //    }
    //});
    //
    //$('.mfp-close-gallery').on('click', function(){
    //    $.magnificPopup.close();
    //});

    /**
     ====================================================
     Touch :hover hack
     ====================================================
     **/

    // if ( is.not.desktop() ) {
    //     $('html').addClass('is-touch');
    //     $('body').attr('ontouchstart', '');
    // } else {
    //     $('html').addClass('is-notouch');
    // }

});
