'use strict'

const path = require('path')

const customLaunchers = {
  sl_chrome: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '51.0'
  },
  sl_firefox: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 10',
    version: '47.0'
  },
  sl_ie: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '11.0',
  },
  sl_edge: {
    base: 'SauceLabs',
    browserName: 'MicrosoftEdge',
    platform: 'Windows 10',
    version: '13.10586'
  },
  sl_safari: {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.11',
    version: '9.0',
  },
}

const isTravis   = process.env.TRAVIS === 'true'
const isFirstJob = /\.1$/.test(process.env.TRAVIS_JOB_NUMBER)

const browsers = ['PhantomJS']
if (isTravis && isFirstJob) {
  Array.prototype.push.apply(browsers, Object.keys(customLaunchers))
}

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],

    browsers: browsers,
    customLaunchers: customLaunchers,

    sauceLabs: {
      public: 'public',
    },
    concurrency: isTravis ? 5 : Infinity,
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
