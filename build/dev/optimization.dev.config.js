const dirVars = require('../base/dirVars.config.js');

let optimization = require('../base/optimization.config.js');

optimization.noEmitOnErrors = true;
optimization.namedModules = true;

module.exports = optimization;
