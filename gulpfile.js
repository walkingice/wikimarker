'use strict';

var path = require('path');

var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

// load plugins
var $ = require('gulp-load-plugins')();

var PORT = 8080,
    TMP = '_tmp';

gulp.task('jade', function () {
    // render jade files excepts templates
    return gulp.src(['app/**/*.jade', '!app/**/_*.jade'])
        .pipe($.jade())
        .pipe(gulp.dest(TMP + '/'));
});

gulp.task("webpack-dev-server", function() {
    var config = require('./webpack.config');

    config.debug = true;
    config.devtool = "#inline-source-map";

    var compiler = webpack(config);

    // https://github.com/webpack/docs/wiki/webpack-dev-server
    new WebpackDevServer(compiler, {
        contentBase: TMP,
        hot: true,
        progress: true,
        stats: {
            colors: true
        }
    }).listen(PORT, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "Run on http://localhost:" + PORT);
    });
});

gulp.task('clean', function () {
    return gulp.src([TMP], { read: false }).pipe($.rimraf());
});

gulp.task('default', ['clean'], function () {
    gulp.start('dev');
});

gulp.task('dev', ['jade'], function () {
    gulp.watch('app/**/*.jade', ['jade']);
    gulp.start('webpack-dev-server');
});


