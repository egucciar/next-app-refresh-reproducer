/* eslint-env node */
const { ProvidePlugin } = require('webpack');
const path = require('path');

module.exports = {
  assetPrefix: '/next-app',
  experimental: {
    basePath: '/next-app',
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: [/node_modules/, '.next/**'],
    };
    return config;
  },
}
