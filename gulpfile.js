'use strict';

var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    sass      = require('gulp-sass'),
    cleanCSS  = require('gulp-clean-css'),
    uglify    = require('gulp-uglify'),
    concat    = require('gulp-concat');

// Server task
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

// Compile sass
gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/sass'));
});

// Minify CSS
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('./src/sass/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));
});

// Minify JS
gulp.task('minify-js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./src/js/min'));
});

// Compress JS
gulp.task('compress-js', ['minify-js'], function() {
  return gulp.src('./src/js/min/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/sass/**/*.scss'], ['minify-css']);
  gulp.watch(['./src/js/*.js'], ['compress-js']);
});

gulp.task('default', ['connect', 'watch']);