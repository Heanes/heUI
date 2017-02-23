/**
 * @doc webpack config
 * @author Heanes
 * @time 2017-02-08 18:50:32 周三
 */

/** ------------------------------ 引入资源 ------------------------------ */
let webpack = require('webpack');
let path = require('path');
let glob = require('glob');

/** ------------------------------ 路径定义 ------------------------------ */
let srcDir = path.resolve(process.cwd(), 'doc');
let distDir = path.resolve(process.cwd(), 'dist');
let nodeModPath = path.resolve(__dirname, './node_modules');
// 手动配置某些模块的路径，可以加快webpack的编译速度
//let pathMap = require('./src/pathmap.json');
let publicPath = '/';

/** ------------------------------ 插件定义 ------------------------------ */
// 合并共同依赖
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
//依据一个简单的模板，帮你生成最终的HTML5文件，这个文件中自动引用了你打包后的资源文件。每次编译都在文件名中插入一个不同的哈希值。
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 将需要单独打包的文件从js文件中分离出来
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// webpack 自带js压缩插件
let UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// 压缩css的插件
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/**
 * @doc 给文件名添加后缀
 * @param file 文件全名(文件名及后缀名)
 * @param suffix 欲添加的后缀字符串
 * @param fileExtensionSymbol 文件名后缀分隔符，默认为'.'
 */
function addFileNameSuffix(file, suffix, fileExtensionSymbol) {
    fileExtensionSymbol = fileExtensionSymbol || '.';
    var strArr = [];
    strArr = file.split('.');
    var returnFile = '';
    for (var i = 0, length = strArr.length; i < length; i++) {
        returnFile += strArr[i];
        if(i == length - 2){
            returnFile += suffix;
        }
        returnFile += fileExtensionSymbol;
    }
    return returnFile;
}

/** ------------------------------ 配置定义 ------------------------------ */
module.exports = function(options){
    options = options || {};
    var debug = options.debug !== undefined ? options.debug : true;
    var mode = options.mode !== undefined ? options.mode : 'production';
    var ENV = {
        DEBUG: debug,
        MODE: mode,
    };
    let outputJsFileName = 'js/heanesUI.js';
    let outputCssFileName = 'css/heanesUI.css';
    let config = {
        entry: {
            main: __dirname + '/webpack/build/entryMain.js',
        },
        output: {
            path: __dirname + '/dist',//打包后的文件存放的地方
            filename: outputJsFileName//打包后输出文件的文件名
        },
        devtool: 'source-map',

        module: {
            loaders: [
                {
                    test: /\.json$/,
                    loader: 'json'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.css$/,
                    //loader: 'style!css'
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                },
                {
                    test: /\.scss$/,
                    //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
                    loader: ExtractTextPlugin.extract('style', 'css!sass')
                }
            ]
        },

        devServer: {
            port: 8080, // 端口
            contentBase: './dist',//本地服务器所加载的页面所在的目录
            //colors: true,//终端中输出结果为彩色
            historyApiFallback: true,//不跳转
            inline: true//实时刷新
        },

        plugins: [
            // 自动根据模版生成public目标访问文件
            new HtmlWebpackPlugin({
                template: __dirname + '/doc/index.html'
            }),
            // 合并共同依赖
            // new CommonsChunkPlugin('vender','vender.js'),
        ]
    };
    // 环境模式切换
    let cssExtractPluginObj = new ExtractTextPlugin(outputCssFileName);
    switch (ENV.MODE){
        case 'dev':
            // 如果是开发模式
            // 1. 生成目录的清理
            // 2. css不压缩，不去掉注释
            //提取出来的样式放在style.css文件中
            config.plugins.push(cssExtractPluginObj);
            // 3. js不压缩，不去掉注释
            // 4. 构建生成文件不加hash
            break;
        case 'production':
            // 如果是生产环境
            // 1. css压缩，去掉注释
            // css压缩插件(【webpack 自带插件】)
            let cssOptimizePluginObj = new OptimizeCssAssetsPlugin({
                // 压缩css文件，可以按需要匹配是否需要压缩css文件，如需要压缩只需要将文件后缀名改为.min.css即可
                //assetNameRegExp: /\.min\.css$/g,
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: true
            });
            config.plugins.push(cssOptimizePluginObj);
            // 2. js压缩，去掉注释(【webpack 自带插件】)
            let jsOptimizePluginObj = new UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    // 去掉注释内容
                    comments: false,
                },
            });
            // 3. 构建生成文件加hash
            // 3.1 css加hash
            cssExtractPluginObj = new ExtractTextPlugin(addFileNameSuffix(outputCssFileName, '.min-[chunkhash:8]'));
            config.plugins.push(cssExtractPluginObj);
            // 3.2 js加hash
            config.output.filename = addFileNameSuffix(outputJsFileName, '.min-[chunkhash:8]');
            // 4. 部署到服务器或者其他行为
            break;
    }
    return config;
};