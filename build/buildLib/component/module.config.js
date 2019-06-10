let modulesConfig = require('../base/module.config.js');

modulesConfig.rules.push(
  // sass-scss 处理
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'sass-loader'
    ]
  },
  {
    enforce: 'pre',
    test: /\.(vue|([jt])sx?)$/,
    exclude: [
      /node_modules/
    ],
    use: [
      /* config.module.rule('eslint').use('eslint-loader') */
      {
        loader: 'eslint-loader',
        options: {
          extensions: [
            '.js',
            '.jsx',
            '.vue'
          ],
          cache: true,
          emitWarning: true,
          emitError: false
        }
      }
    ]
  }
);

module.exports = modulesConfig;
