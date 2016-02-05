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
    return gulp.src(['app/**/*.jade'])
        .pipe($.jade())
        .pipe(gulp.dest(TMP + '/'));
});

gulp.task("webpack-dev-server", function() {
    // https://webpack.github.io/docs/configuration.html
    var compiler = webpack({
        context: __dirname + '/app',
        entry: {
            app: ['./js/index.jsx']
        },
        debug: true,
        devtool: "#inline-source-map",
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
                },
            ]
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, "_tmp")
        }
    });

    // https://github.com/webpack/docs/wiki/webpack-dev-server
    new WebpackDevServer(compiler, {
        contentBase: TMP,
        hot: true,
        inline: true,
        progress: true,
        stats: {
            color: true
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


