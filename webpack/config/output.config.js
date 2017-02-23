var dirVars = require('./base/dir-vars.config.js');
var outputJsFileName = "js/heanesUI.js";
module.exports = {
  path: dirVars.buildDir,
  publicPath: '/',
  filename: outputJsFileName,
  chunkFilename: '[id].bundle.js',
};