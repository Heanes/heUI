/*
 * @doc dev环境的打包配置
 * @author Heanes
 * @time 2017-02-09 19:40:31 周四
 */
'use strict';

var webpack_config = require('./webpack.config');

var config = {
    debug: true,
    mode:  'dev'
};
module.exports = webpack_config(config);