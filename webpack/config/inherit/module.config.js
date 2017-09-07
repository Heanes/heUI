let dirVars = require('../base/dir-vars.config.js');
let pathLibs = 'public/static/libs/';
module.exports = {
  preLoaders: [
    {
      test: /\.js$/,
      loader: 'eslint-loader',
      include: dirVars.srcRootDir,
      exclude: [/bootstrap/],
    }
  ],

  loaders: [
    /*{
      test: require.resolve('jquery'),
      loader: 'expose-loader?$!expose-loader?jQuery',
    },*/
    /*{
      test: /\.js$/,
      include: dirVars.srcRootDir,
      loader: 'babel-loader',
      query: {
        presets: [['es2015', { loose: true }], 'react'],
        cacheDirectory: true,
        plugins: ['transform-runtime'],
      },
    },*/
    { test: /\.json$/, loader: 'json' },
    {
      test: /\.js$/,
      //exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.html$/,
      include: dirVars.srcRootDir,
      loader: 'html-loader',
    },
    {
      test: /\.ejs$/,
      include: dirVars.srcRootDir,
      loader: 'ejs-loader',
    },
    {
      // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
      // 如下配置，将小于8192byte的图片转成base64码
      test: /\.(png|jpg|gif)$/,
      include: dirVars.srcRootDir,
      loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
    },
    {
      // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      include: dirVars.srcRootDir,
      loader: 'file-loader?name=static/fonts/[name].[ext]&publicPath=../',
    },
    {
      // 专供font-awesome方案使用的，后面会带一串时间戳，需要特别匹配到，需要注意publicPath可以按字符串添加到[path]所代表的路径前
      // @see https://github.com/webpack-contrib/file-loader#filename-template-placeholders
      test: /\.(woff|woff2|svg|eot|otf|ttf)\??.*$/,
      include: /font-awesome/,
      loader: 'file-loader?name=fonts/[name].[ext]&useRelativePath=true&publicPath=../',
    },
    {
      // 专供bootstrap方案使用的，忽略bootstrap自带的字体文件
      test: /\.(woff|woff2|svg|eot|ttf)$/,
      include: /bootstrap/,
      loader: 'null-loader',
    },
  ],
};
