define(["jquery", "matchMedia", "slick"], function ($, mediaCheck) {
    "use strict";

    $.widget('balance.slickInit', {
        options: {
            autoplay: false,
            arrowsDesktop: true,
            arrowsTablet:false,
            arrowsMobile: false,
            infinite: true,
            dotsDesktop: false,
            dotsTablet: true,
            dotsMobile: true,
            unslickBreakpoint: 9999,
            desktopBreakpoint: false,
            tabletBreakpoint: 1024,
            mobileBreakpoint: 640,
            slidesToShowDesktop:4,
            slidesToShowTablet:3,
            slidesToShowMobile:2,
            opts: [],
            selector: null
        },
        _create: function () {
            var self = this;
            this._super();
            this.opts = {
                autoplay: this.options.autoplay,
                arrows: this.options.arrowsDesktop,
                infinite: this.options.infinite,
                prevArrow: '<button class="slick-prev slick-arrow"></button>',
                nextArrow: '<button class="slick-next slick-arrow"></button>',
                //appendArrows: add element to append to, (in case we need to append arrows to widget header or something)
                rows: 0,
                responsive: [
                    {
                        breakpoint: this.options.unslickBreakpoint,
                        settings: "unslick"
                    },
                    {
                        breakpoint: this.options.desktopBreakpoint,
                        settings: {
                            arrows: this.options.arrowsDesktop,
                            dots: this.options.dotsDesktop,
                            slidesToShow: this.options.slidesToShowDesktop
                        }
                    },
                    {
                        breakpoint: this.options.tabletBreakpoint,
                        settings: {
                            arrows: this.options.arrowsTablet,
                            dots: this.options.dotsTablet,
                            slidesToShow: this.options.slidesToShowTablet
                        }
                    },
                    {
                        breakpoint: this.options.mobileBreakpoint,
                        settings: {
                            arrows: this.options.arrowsMobile,
                            dots: this.options.dotsMobile,
                            slidesToShow: this.options.slidesToShowMobile
                        }
                    }
                ]
            };

            this.sliderSelector = this.element;
        },
        _init: function () {
            this._super();
            var breakpoint = '1024px';
            if (this.sliderSelector) {
                if(this.options.desktopBreakpoint != false){
                    breakpoint = this.options.desktopBreakpoint + 'px';
                }
                mediaCheck({
                    media: '(max-width: '+breakpoint+')',
                    entry: $.proxy(function () {
                        $(this.sliderSelector).slick(this.opts);
                    }, this),
                    exit: $.proxy(function () {
                        // Switch to Desktop
                    }, this)
                });
            }
        }
    });
    return $.balance.slickInit;
});
