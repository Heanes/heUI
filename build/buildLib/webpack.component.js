/**
 * @doc 分开打包各组件
 * @author Heanes
 * @time 2019-06-09 17:55:40 周日
 */

const webpackConfig = {

  mode: 'production',

  entry: require('./component/entry.config.js'),

  output: require('./component/output.config.js'),

  module: require('./component/module.config.js'),

  resolve: require('./base/resolve.config.js'),

  plugins: require('./component/plugins.config.js'),

  externals: {},

  optimization: require('./component/optimization.config.js'),

  stats: require('./base/stats.config.js'),

  performance: {
    hints: false
  }
};

module.exports = webpackConfig;
