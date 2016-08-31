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
  return gulp.src('./public/src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/src/sass'));
});

// Minify CSS
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('./public/src/sass/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/'));
});

// Minify JS
gulp.task('minify-js', function() {
  return gulp.src([
      './public/src/js/*.js',
      '!./public/src/js/*.min.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('./public/src/js/min'));
});

// Compress JS
gulp.task('compress-js', ['minify-js'], function() {
  return gulp.src('./public/src/js/min/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function () {
  gulp.watch(['./public/src/sass/**/*.scss'], ['minify-css']);
  gulp.watch(['./public/src/js/*.js'], ['compress-js']);
});

gulp.task('default', ['watch']);