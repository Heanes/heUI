const optimization = require('../base/optimization.config.js');

optimization.noEmitOnErrors = true;
optimization.namedModules = true;
optimization.minimize = false;

module.exports = optimization;
