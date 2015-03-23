/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    vaultApiAddress: 'http://127.0.0.1:8200',
    modulePrefix: 'ui',
    environment: environment,
    baseURL: '/',
    locationType: 'history',
    clockPollInterval: 10000, // 10 seconds, our default

    contentSecurityPolicy: {
      'connect-src': "'self' 127.0.0.1:8200",
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // Faster polls in development
    ENV.clockPollInterval = 1000; // 1 second
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
