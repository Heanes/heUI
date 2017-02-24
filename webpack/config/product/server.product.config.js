const path = require('path');
let dirVars = require('../base/dir-vars.config.js');

module.exports = {
    devtool: 'source-map',
    devServer: {
        port: 8080, // 端口
        contentBase: './dist',//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        progress:true,
        hot: true,
        inline: true, // 可以监控js变化
        stats: {
            colors: true //终端中输出结果为彩色
        }
    }
};
