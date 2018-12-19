const dirVars = require('./dirVars.config.js');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

let pageEntries = require('./pageEntries.config');
let pluginBanner = require('./pluginBanner.config');

let htmlWebpackPluginArr = [];

pageEntries.forEach(item => {
    // console.log('item', item);

    let htmlFileName = `${item}.html`;

    let templateName = 'src/public/index.html';

    let htmlWebpackPluginOption = {
        filename: htmlFileName,
        template: templateName,
        chunks: ['manifest', 'vendors', 'common'],
        hash: true, // 为静态资源生成hash值
        xhtml: true,
    };

    htmlWebpackPluginOption.chunks.push(item);

    // console.log(htmlWebpackPluginOption);

    // 如果子页面下有html文件，则使用此html作为template，否则使用默认公共模版
    htmlWebpackPluginArr.push(
        new HtmlWebpackPlugin(htmlWebpackPluginOption),
    );
    // console.log('\n');
});

let plugins = [
    // 清理构建目录
    new CleanWebpackPlugin([dirVars.distDirName], {
        root: dirVars.rootDir,       //根目录
    }),

    // 添加banner
    pluginBanner,

    // 输出html
    //...htmlWebpackPluginArr,

    // 将对象暴露给webpack
    new webpack.ProvidePlugin({
        jQuery: 'jquery'
    })
];

module.exports = plugins;
