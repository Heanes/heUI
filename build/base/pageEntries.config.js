/**
 * @doc 页面入口
 * @author Heanes
 * @time 2018-11-05 17:24:58 周一
 */
const dirVars = require('./dirVars.config.js');

let Glob = require("glob").Glob;

let globOptions = {
    cwd: dirVars.pagesDir, // 在pages目录里找
    sync: true, // 这里不能异步，只能同步
};
let gb = new Glob('**/!(_)*+(index.js)', globOptions);

let found = gb.found;
// console.log('found', found);

// 剔除含'_'或者含'/_'这种的文件
let foundFiltered = found.filter(item => {
    return !item.match(/^_.*|\/_.*|static/);
}).map(item => {
    return item.replace(/\/[^\/]*\..+/, '');
});

// console.log('founds', foundFiltered);

module.exports = foundFiltered;
