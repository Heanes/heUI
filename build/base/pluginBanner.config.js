const dirVars = require('./dirVars.config.js');
const webpack = require('webpack');

let config = require('../config');

// 生成文件添加自定义banner
let bannerPluginIns = new webpack.BannerPlugin({
  banner: (options) => {
    return `${config.appName} ${config.appVersion}\n`
      + `@author: ${config.appAuthor}\n`
      + `@time: ${config.generateTime}\n`
      + `(c) 2014-${config.copyrightYear} ${config.appAuthor}\n`
      + `Released under the MIT License.`;
  },
  exclude: [
    /vendors.*/     // 排除vendors

  ]
});

module.exports = bannerPluginIns;
