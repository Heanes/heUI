const path = require('path');
let dirs = {};

dirs.distDirName = 'dist';
dirs.srcRootDirName = 'src';
dirs.pagesDirName = 'pages';
dirs.componentsDirName = 'components';
dirs.layoutDirName = '_layout';
dirs.publicDirName = 'public';
dirs.staticDirName = 'static';

/**
 * @doc 定义项目目录
 * @type {*|*|string}
 * @author Heanes
 * @time 2018-11-05 16:38:28 周一
 */
dirs.rootDir       = path.resolve(__dirname, '../../');                             // 项目根目录
dirs.srcRootDir    = path.resolve(dirs.rootDir, './' + dirs.srcRootDirName);        // 源文件目录，项目业务代码根目录
dirs.pagesDir      = path.resolve(dirs.srcRootDir, './' + dirs.pagesDirName);       // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
dirs.publicDir     = path.resolve(dirs.srcRootDir, './' + dirs.publicDirName);      // 存放各个页面使用到的公共资源
dirs.componentsDir = path.resolve(dirs.srcRootDir, './' + dirs.componentsDirName);  // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
dirs.pagesDir      = path.resolve(dirs.srcRootDir, './' + dirs.pagesDirName);       // 存放UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路
dirs.layoutDir     = path.resolve(dirs.pagesDir, './' + dirs.layoutDirName);        // 存放UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路

// 生成文件目录
dirs.distDir = path.resolve(dirs.rootDir, './' + dirs.distDirName);                 // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

// console.log('----------------------------------------');
// console.log('dirs:\n', dirs);
// console.log('----------------------------------------');

module.exports = dirs;
