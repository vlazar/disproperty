module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'lib/**/*.js',
      'test/**/*Spec.js'
    ],
    browsers: ['Chrome'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  });
};
