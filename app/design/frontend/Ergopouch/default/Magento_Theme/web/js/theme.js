/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'matchMedia',
    'mage/smart-keyboard-handler',
    'mage/mage',
    'mage/ie-class-fixer',
    'mage/validation',
    'mage/dropdowns',
    'collapsible',
    'ergopouch_slick',
    'niceSelect',
    'domReady!'
], function ($, mediaCheck, keyboardHandler) {
    'use strict';
    keyboardHandler.apply();

    $('.nav-toggle').off('click').on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();

        if ($('html').hasClass('nav-open')) {
            $('html').removeClass('nav-open');
            setTimeout(function () {
                $('html').removeClass('nav-before-open');
            }, 300);
        } else {
            $('html').addClass('nav-before-open');
            setTimeout(function () {
                $('html').addClass('nav-open');
            }, 22);
        }
    });

    //Browse by your unique stage
    $('.block-unique-stage ul').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 979,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2.4,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ]
    });

    // Brands
    $('.block-brand-list ul').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    dots: false,
                    infinite: true,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });

    $("#layered-filter-block").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        if(!$(e.target).is('.filter-options-title')) {
            $(".filter-options-item.active .filter-options-title").trigger("click");
            $('.nice-select').removeClass('open').find('.option');
        }
    });

    $('.toolbar-products select').niceSelect();

    mediaCheck({
        media: '(max-width: 979px)',
        entry: function () {
            $(".footer-column .block-info > div").collapsible({
                header : "h4",
                content : "ul",
                trigger : "h4",
                collapsible: true,
                active: false,
                icons: {"header": "plus", "activeHeader": "minus"}
            });

            $('.horizontal-menu .no-display').closest("ul").addClass("custom-style");
            $('.footer-column .copyright').insertAfter('.page-footer .block-web-accept');
            $('.block-bestseller-product .cta-button').appendTo('.block-bestseller-product .container');

            if($(".category-description .age-stage").length) {
                $(".category-description .age-stage").appendTo('.page-title-wrapper');
                $(".page-title-wrapper").addClass("wrap-age-stage");
            }

            $(".filter-close").on("click", function () {
                $('#layered-filter-block strong').trigger("click");
            })
        },
        exit: function () {

        }
    });
});
