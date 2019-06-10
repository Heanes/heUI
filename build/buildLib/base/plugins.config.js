/**
 * @doc 定义插件
 * @author Heanes
 * @time 2019-05-03 13:41:50 周五
 */

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const BannerPlugin = require('./plugin/BannerPlugin.config.js');

let plugins = [

  // vue-loader,
  new VueLoaderPlugin(),

  // 添加banner
  BannerPlugin

];

module.exports = plugins;
