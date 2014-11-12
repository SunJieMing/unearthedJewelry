// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    plugins : [
        'karma-junit-reporter',
        'karma-chrome-launcher',
        'karma-jasmine'
        ],

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // JASMINE or something -- insert it.  'define' is not defined.
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-scenario/angular-scenario.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.js',
      'app/bower_components/es5-shim/es5-sham.js',
      'app/bower_components/es5-shim/es5-shim.js',
      'app/bower_components/json3/lib/json3.js',
      'app/views/app.js',
      'app/views/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
      '**/angular-scenario.js'
    ],

    // web server port
    port: 3000,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
