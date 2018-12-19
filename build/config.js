const utils = require('./utils/utils');
/**
 * @doc 编译信息基础配置文件
 */
const packageConfig = require('../package.json');
module.exports = {
    appName: packageConfig.name,
    appVersion: packageConfig.version,
    appAuthor: packageConfig.author,
    copyrightYear: utils.getFormatDate('yyyy'),
    generateTime: utils.getFormatDate(),

    dev: {
        host: 'localhost',      // 地址 can be overwritten by process.env.HOST
        port: 8080,             // 端口 can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false, // 自动打开浏览器
        errorOverlay: true,     // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。
        notifyOnErrors: true,   // 有错误时是否通知(support by friendly-errors-webpack-plugin)
        poll: false,            // 与监视文件相关的控制选项 https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    },

    production: {}
};
