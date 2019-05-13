const webpackConfig = {

  mode: 'production',

  entry: require('./buildLibrary/base/entry.config.js'),

  output: require('./buildLibrary/production/output.production.config.js'),

  module: require('./buildLibrary/production/module.production.config.js'),

  resolve: require('./buildLibrary/base/resolve.config.js'),

  plugins: require('./buildLibrary/production/plugins.production.config.js'),

  externals: {},

  optimization: require('./buildLibrary/production/optimization.production.config.js'),

  stats: require('./buildLibrary/production/stats.production.config.js'),

  devtool: 'nosources-source-map'
};

module.exports = webpackConfig;
