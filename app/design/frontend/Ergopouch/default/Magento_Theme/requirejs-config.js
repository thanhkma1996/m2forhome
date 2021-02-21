/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'niceSelect': 'Magento_Theme/js/vendor/jquery.nice-select'
        }
    },
    shim: {
        'niceSelect': {
            deps: ['jquery']
        },
        'device-detect': {
            deps: ['jquery']
        }
    },
    deps: [
        'Magento_Theme/js/theme',
        'Magento_Theme/js/vendor/device-detect'
    ]
};
