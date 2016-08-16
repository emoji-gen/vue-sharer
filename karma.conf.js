module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['tap', 'sinon'],

    files: [
      'test.js'
    ],
    exclude: [],

    preprocessors: {
      'test.js': ['webpack']
    },

    webpack: {
      resolve: {
        extensions: ['', '.js', '.json']
      },
      module: {
      },
      node: {
        fs: 'empty',
      },
    },
    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['tap-pretty'],
    tapReporter: {
      prettifier: 'faucet',
      separator: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_LOG,

    browserConsoleLogOptions: {
      level: 'error',
      format: '%b %T: %m',
      terminal: true,
    },

    autoWatch: true,
    singleRun: true,
  })
}
