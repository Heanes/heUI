const webpack = require('webpack');
let pluginsConfig = require('../inherit/plugins.config.js');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
// webpack 自带js压缩插件
let UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

/*pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: true,
}));*/

//提取出来的样式放在css文件中，contenthash是根据文件内容计算
//let outputCssFileName = 'css/heanesUI.min-[contenthash:8].css';
let outputCssFileName = 'css/heanesUI.min.css';
pluginsConfig.push(
  new ExtractTextPlugin(outputCssFileName
      //, {allChunks: true}
  )
);

// webpack 自带js压缩插件
pluginsConfig.push(
   new UglifyJsPlugin({
     compress: {
       warnings: false
     },
     output: {
       // 去掉注释内容
       comments: false,
     },
   })
);

module.exports = pluginsConfig;
