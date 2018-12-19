const dirVars = require('../base/dirVars.config.js');

let optimization = require('../base/optimization.config.js');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

optimization = {
    ...optimization,
    minimizer: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
};
module.exports = optimization;