const dirVars = require('../base/dir-vars.config.js');

let outputJsFileName = "js/heanesUI.js";
module.exports = {
  path: dirVars.buildDir,
  publicPath: '/',
  filename: outputJsFileName,
  //chunkFilename: '[id].bundle.js',
};