/**
 * @doc 定义module
 * @author Heanes
 * @time 2019-05-03 13:39:59 周五
 */

const config = require('../config/config.js');

module.exports = {
  rules: [
    {
      test: /\.vue$/,
      use: [
        'vue-loader'
      ],
      include: [
        config.dirs.docRootDir,
        config.dirs.srcRootDir
      ],
      exclude: /node_modules/
    },
    // 图片等资源文件
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 4,
            name: 'static/img/[name].[hash:8].[ext]'
          }
        }
      ],
      exclude: /node_modules/
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 4,
            // useRelativePath: true,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ],
      exclude: /node_modules/
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 4,
            // useRelativePath: true,
            name: 'static/fonts/[name].[hash:8].[ext]'
          }
        }
      ],
      exclude: /node_modules/
    }
  ]
};
