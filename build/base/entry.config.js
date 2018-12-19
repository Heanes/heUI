/**
 * @doc 定义入口
 * @author Heanes
 * @time 2018-11-05 17:04:48 周一
 */

const dirVars = require('./dirVars.config.js');

let pageEntries = require('./pageEntries.config');
let entries = {};
/*pageEntries.forEach(item => {
    let directory = item.match(/[^\\]*(?=\..*$)/)[0];
    entries[directory] = `./${dirVars.srcRootDirName}/${dirVars.pagesDirName}/${item}`;
});*/

pageEntries.forEach(item => {
    //let directory = item.match(/[^\\]*(?=\..*$)/)[0];
    entries[item] = `./${dirVars.srcRootDirName}/${dirVars.pagesDirName}/${item}/index.js`;
});

/*console.log('----------------------------------------');
console.log(__filename, ':entries:\n', entries);
console.log('----------------------------------------');*/

//module.exports = entries;
module.exports = {
    'heanesUI': `./${dirVars.srcRootDirName}/heanes/heanesUI.js`
};