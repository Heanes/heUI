/**
 * @doc gulp 打包配置
 * @author Heanes
 * @time 2017-02-13 18:11:37 周一
 */
'use strict';

let gulp = require('gulp');
let webpack = require('webpack');

//用于gulp传递参数
let minimist = require('minimist');
let gutil = require('gulp-util');
let src = process.cwd() + '/src';
let assets = process.cwd() + '/dist';

let knownOptions = {
    string: 'env',
    default: {env: process.env.ENV_MODE || 'production'}
};

let options = minimist(process.argv.slice(2), knownOptions);

let webpackConf = require('./webpack.config');
let webpackConfDev = require('./webpack.dev.config');

//check code
gulp.task('hint', function () {
    let jshint = require('gulp-jshint');
    let stylish = require('jshint-stylish');

    return gulp.src([
        '!' + src + '/js/lib/**/*.js',
        src + '/js/**/*.js'
    ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// clean asserts
gulp.task('clean', ['hint'], function () {
    let clean = require('gulp-clean');
    return gulp.src(assets, {read: true})
        .pipe(clean())
});

//run webpack pack
gulp.task('pack', ['clean'], function (done) {
    let _conf = options.env === 'production' ? webpackConf : webpackConfDev;
    webpack(_conf, function (err, stats) {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({colors: true}));
        done()
    });
});

//default task
gulp.task('default', ['pack']);
