const config = require('../config/config.js');

let modulesConfig = require('../base/module.config.js');

// @see https://github.com/webpack-contrib/mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

modulesConfig.rules.push(
  // sass-scss 处理
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '/'
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        }
      },
      'sass-loader'
    ],
    include: [
      config.dirs.srcRootDir,
      config.dirs.srcDocRootDir
    ],
    exclude: /node_modules|vendor/
  },
);

module.exports = modulesConfig;