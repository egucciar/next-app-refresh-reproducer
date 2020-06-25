/* eslint-env node */
const { ProvidePlugin } = require('webpack');
const path = require('path');

module.exports = {
  assetPrefix: '/next-app',
  experimental: {
    basePath: '/next-app',
  },
}
