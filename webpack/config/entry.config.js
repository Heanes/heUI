const path = require('path');
let dirVars = require('./base/dir-vars.config.js');
let pageArr = require('./base/page-entries.config.js');
let configEntry = {};

pageArr.forEach((page) => {
  configEntry[page] = [path.resolve(dirVars.pagesDir, page + '/page'), 'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080'];
});

module.exports = configEntry;
