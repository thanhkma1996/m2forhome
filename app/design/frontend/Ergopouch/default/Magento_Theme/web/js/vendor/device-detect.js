
define([
    'jquery',
    'matchMedia'
], function ($, mediaCheck) {
    'use strict';

    var isSafari = (navigator.userAgent.indexOf("Safari")!= -1 )&& (navigator.userAgent.indexOf('Chrome') == -1),
        html = document.documentElement,
        mediaClassMap = {
            '(min-width: 1025px)': 'iDesktopDevices',
            '(min-width: 768px) and (max-width: 1024px)': 'iTabletDevices',
            '(max-width: 767px)': 'iMobileDevices'
        };

    if (isSafari) {
        html.classList.add('isSafari');
    }

    for (var resolution in mediaClassMap) {
        mediaCheck({
            media: resolution,
            entry: function () {
                if (isSafari) {
                    html.classList.add(mediaClassMap[resolution]);
                }
            }
        });
    }
});


