/*
 * @doc dev环境的打包配置
 * @author Heanes
 * @time 2017-02-09 19:40:31 周四
 */
'use strict';

module.exports = {
    entry: require('./entry.dev.config.js'),

    output: require('./output.dev.config.js'),

    module: require('./module.dev.config.js'),

    //resolve: require('resolve.config.js'),

    plugins: require('./plugins.dev.config.js'),

    //eslint: require('../vendor/eslint.config.js'),

    postcss: require('../vendor/postcss.config.js'),

    devtool: 'source-map',
    devServer: {
        port: 8080, // 端口
        contentBase: './',//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        progress: true,
        hot: true,
        inline: true, // 可以监控js变化
        stats: {
            colors: true //终端中输出结果为彩色
        }
    }
};