let dirVars = require('../base/dir-vars.config.js');

let moduleConfig = require('../inherit/module.config.js');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
  由于ExtractTextPlugin不支持热更新，因此选择在开发环境下直接用style-loader加载样式。
  如有问题，可切换回ExtractTextPlugin，即使不能用热更新，也可实现LiveReload
*/
/*moduleConfig.loaders.push({
  test: /\.css$/,
  exclude: /node_modules|bootstrap/,
  loader: 'style!css?minimize&-autoprefixer!postcss',
});*/

// 其他样式库的loader
moduleConfig.loaders.push({
    test: /\.css$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
});

moduleConfig.loaders.push({
  test: /\.css$/,
  exclude: /node_modules|bootstrap|font-awesome/,
  include: dirVars.srcRootDir,
  loader: ExtractTextPlugin.extract('style-loader', 'css?minimize&-autoprefixer!postcss')
});

moduleConfig.loaders.push({
  test: /\.scss$/,
  include: dirVars.srcRootDir|/weback/,
  //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
  loader: ExtractTextPlugin.extract('style', 'css?minimize&-autoprefixer!postcss!sass')
});

moduleConfig.loaders.push({
  test: /\.less$/,
  include: dirVars.srcRootDir|/weback/,
  loader: 'style!css?minimize&-autoprefixer!postcss!less',
});

module.exports = moduleConfig;
