const config = require('../config/config.js');

module.exports = {
  filename: `js/[name].js`,
  path: config.dirs.distDir,
  publicPath: '/',
};
