'use strict';

var path = require('path');

var gulp = require('gulp');
var gutil = require("gulp-util");
var gdeploy = require('gulp-gh-pages');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

// load plugins
var $ = require('gulp-load-plugins')();

var PORT = 8080,
    OUTPUT = '_build',
    TMP = '_tmp';

var fakeData = false;

gulp.task('jade', function () {
    // render jade files excepts templates
    return gulp.src(['app/**/*.jade', '!app/**/_*.jade'])
        .pipe($.jade())
        .pipe(gulp.dest(TMP + '/'));
});

gulp.task('images', function () {
    return gulp.src('app/imgs/**/*')
        .pipe(gulp.dest(TMP + '/imgs'));
});

gulp.task("webpack-dev-server", function() {
    var config = require('./webpack.config');

    config.debug = true;
    config.devtool = "#inline-source-map";

    config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + PORT,
                             "webpack/hot/dev-server");

    // XXX: remove the first one, it should be original DefinePlugin
    // it needs more love to improve.
    config.plugins.shift();
    config.plugins.push(new webpack.DefinePlugin({
        '_WEBPACK_USE_FAKE_DATA_': fakeData
    }));

    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    var compiler = webpack(config);

    // https://github.com/webpack/docs/wiki/webpack-dev-server
    new WebpackDevServer(compiler, {
        contentBase: TMP,
        progress: true,
        hot: true,
        stats: {
            cached: false,
            colors: true
        }
    }).listen(PORT, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "Run on http://localhost:" + PORT);
    });
});

gulp.task("webpack", function(callback) {
    var config = require('./webpack.config');
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
        }));
        callback();
    });
});

gulp.task('clean', function () {
    return gulp.src([TMP], { read: false }).pipe($.rimraf());
});

gulp.task('default', ['clean'], function () {
    gulp.start('dev');
});

gulp.task('html', ['jade', 'images'], function () {
    return gulp.src([TMP + '/**/*.html', TMP + '/**/*.png'])
        .pipe(gulp.dest(OUTPUT));
});

gulp.task('build', ['html', 'webpack']);


gulp.task('dev', ['jade', 'images'], function () {
    gulp.watch('app/**/*.jade', ['jade']);
    gulp.watch('app/imgs/**/*', ['images']);
    gulp.start('webpack-dev-server');
});

gulp.task('dev-fake', ['jade'], function () {
    fakeData = true;
    gulp.start('dev');
});

gulp.task('deploy', ['build'], function () {
        return gulp.src(['./CNAME', './' + OUTPUT + '/**/*'])
                .pipe(gdeploy({}));
});
