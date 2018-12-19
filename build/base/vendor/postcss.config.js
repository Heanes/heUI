const precss = require('precss');
const autoprefixer = require('autoprefixer');

/**
 * @doc css处理，美化，加前缀等
 * @returns {*[]}
 */
module.exports = function postcss() {
  return [precss, autoprefixer({
    remove: false,
    browsers: ['ie >= 8', '> 1% in CN'],
  })];
};
