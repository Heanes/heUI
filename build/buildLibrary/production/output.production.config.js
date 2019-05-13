const config = require('../../config/config.js');

module.exports = {
  filename: `heUI.js`,
  path: config.dirs.distLibDir,
  publicPath: '/',
  library: 'he-ui-vue', // 指定的就是你使用require时的模块名
  libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
  umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
};
