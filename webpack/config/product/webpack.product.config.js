/*
 * @doc dev环境的打包配置
 * @author Heanes
 * @time 2017-02-09 19:40:31 周四
 */
'use strict';

module.exports = {
    entry: require('./entry.product.config.js'),

    output: require('./output.product.config.js'),

    module: require('./module.product.config.js'),

    //resolve: require('resolve.config.js'),

    plugins: require('./plugins.product.config.js'),

    eslint: require('../vendor/eslint.config.js'),

    postcss: require('../vendor/postcss.config.js'),

};