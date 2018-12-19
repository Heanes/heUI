const dirVars = require('../base/dirVars.config.js');

const pluginsConfig = require('../base/plugins.config.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

pluginsConfig.push(
    // 压缩css
    new MiniCssExtractPlugin({
        filename: `css/[name].css`,
    })
);

module.exports = pluginsConfig;