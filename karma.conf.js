// Karma configuration

module.exports = function (config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // base path, that will be used to resolve files and exclude
        basePath: '',

        captureTimeout: 60000,

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'vector2D.js',
            'tests/vector2D.spec.js'
        ],

        // list of files / patterns to exclude
        exclude: [
            'sample.js'
        ],

        reporters: [
            'coverage',
            'progress'
        ],

        preprocessors: {
        },


        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage'
        ],
        debug: {
            options: {
                open: true //open node-inspector in Chrome automatically
            }
        },

        coverageReporter: {
            dir: 'coverage-reports/karma_html',
            reporters: [
                {
                    type: 'html'
                },
                {
                    type: 'text'
                }
            ]
        },

        // web server port
        port: 8085,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO
    });
};
