const path = require('path');

const config = require('../config/config.js');

module.exports = {
  modules: [path.resolve(config.dirs.rootDir, 'node_modules')],
  alias: {
    // 定义src源目录别名
    '@': config.dirs.docRootDir,
    '~': config.dirs.rootDir,
    'he-ui-vue': config.dirs.rootDir  // 这里可以在doc中import he-ui-vue
  },
  extensions: ['.js', '.json', '.vue']
};
