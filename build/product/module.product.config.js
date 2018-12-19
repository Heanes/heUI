const dirVars = require('../base/dirVars.config.js');

let modules = require('../base/module.config');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

modules.rules.push(
    // sass-scss 处理
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ],
        /*include: dirVars.srcRootDir,
        exclude: /node_modules|vendor/*/
    },
    // js 处理
    {
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'], // 转换为兼容的es2015 js语法
            }
        },
        /*include: dirVars.srcRootDir,
        exclude: /node_modules|vendor/,*/
    }
);

module.exports = modules;
