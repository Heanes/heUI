const dirVars = require('../base/dir-vars.config.js');
// 注意 当存在【热部署插件HotModuleReplacementPlugin】时chunkhash不可用，要使用hash
// let outputJsFileName = "js/heanesUI.min-[chunkhash:8].js";
let outputJsFileName = "js/heanesUI.min.js";
module.exports = {
  path: dirVars.buildDir,
  publicPath: '/',
  filename: outputJsFileName,
  chunkFilename: '[id].bundle.js',
};