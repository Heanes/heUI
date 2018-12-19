const dirVars = require('../base/dirVars.config');

const path = require('path');

module.exports = {
    alias: {
        // 定义src源目录别名
        '@': dirVars.srcRootDir,
        layout: path.resolve(dirVars.layoutDir),
        //'jquery': path.resolve(dirVars.srcRootDir, 'public/static/vendor/jquery/3.3.1/jquery.min.js')
    },
    extensions: ['.js', '.json', '.vue']
};
