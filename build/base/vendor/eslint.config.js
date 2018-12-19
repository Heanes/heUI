const path = require('path');
const dirVars = require('../dirVars.config.js');

module.exports = {
  configFile: path.resolve(dirVars.rootDir, './.eslintrc.js'),
  failOnWarning: true,
  failOnError: true,
  cache: true,
};
