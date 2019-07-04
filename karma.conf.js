'use strict'

const path = require('path')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    browsers: ['ChromeHeadless'],
    sauceLabs: {
      public: 'public',
    },
    concurrency: 1,
    browserDisconnectTimeout: 10000,
    browserNoActivityTimeout: 10000,
    browserDisconnectTolerance: 16,

    files: [
      'test.js'
    ],
    exclude: [],

    preprocessors: {
      'test.js': ['webpack']
    },

    webpack: {
      mode: 'development',
      node: {
        fs: 'empty',
      },
    },
    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['mocha'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_LOG,

    autoWatch: true,
  })
}
