const webpack = require('webpack');
let pluginsConfig = require('../inherit/plugins.config.js');

const dirVars = require('../base/dir-vars.config.js');

// 将需要单独打包的文件从js文件中分离出来
let ExtractTextPlugin = require('extract-text-webpack-plugin');
//依据一个简单的模板，帮你生成最终的HTML5文件，这个文件中自动引用了你打包后的资源文件。每次编译都在文件名中插入一个不同的哈希值。
//let HtmlWebpackPlugin = require('html-webpack-plugin');

// 热部署插件，对应于devServer 中的"hot: true"时使用
let HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

/*pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: false,
}));*/

// 自动根据模版生成目标访问文件
/*pluginsConfig.push(
    new HtmlWebpackPlugin({
        template: dirVars.staticRootDir + '/index.html'
    })
);*/

//提取出来的样式放在css文件中
let outputCssFileName = 'css/heanesUI.css';
pluginsConfig.push(
    new ExtractTextPlugin(outputCssFileName)
);

let AutoprefixerPlugin = require('autoprefixer');
pluginsConfig.push(
    AutoprefixerPlugin
);

// 热部署插件，对应于devServer 中的"hot: true"时使用
pluginsConfig.push(
    new HotModuleReplacementPlugin()
);

module.exports = pluginsConfig;
