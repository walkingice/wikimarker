'use strict';

var gulp = require('gulp');

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

gulp.task('clean', function () {
    return gulp.src([TMP], { read: false }).pipe($.rimraf());
});

gulp.task('default', ['clean'], function () {
    gulp.start('dev');
});

gulp.task('dev', ['jade'], function () {
    gulp.watch('app/**/*.jade', ['jade']);
});


