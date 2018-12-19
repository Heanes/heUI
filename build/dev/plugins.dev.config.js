const pluginsConfig = require('../base/plugins.config.js');

const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

pluginsConfig.push(
  new webpack.HotModuleReplacementPlugin(),

  new webpack.NoEmitOnErrorsPlugin(),
  // 压缩css
  new MiniCssExtractPlugin({
    filename: `css/[name].css`,
  })
);

module.exports = pluginsConfig;
