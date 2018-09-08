module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      'src/**/*.js': ['coverage']
    },
    files: ['test/**/*.js', 'src/**/*.js'],
    reporters: ['progress', 'coverage'],
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    coverageReporter: {
      // specify a common output directory
      dir: 'coverage/report',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' }
      ]
    },
    autoWatch: false,
    //singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity
  })
}
/* 
    preprocessors: {
      'src/*.js': ['webpack']
    },
    webpack: {
      mode: 'production',
      output: {
        filename: '[name]'
       }
    },
*/