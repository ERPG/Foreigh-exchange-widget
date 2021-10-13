const path = require('path');

module.exports = function override(config) {
  return {
    ...config,
    output: {
      filename: 'static/js/my-exchange-widget.[name].js',
      path: path.resolve(__dirname, 'build'),
      libraryTarget: 'umd',
    },
  };
};
