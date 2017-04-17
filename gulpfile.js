var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minify = require('gulp-minify');

gulp.task('minify', function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_site'));
});

var svg2png = require('gulp-svg2png');

gulp.task('svg2png', function () {
  return gulp.src('_includes/svg/**/*.svg')
    .pipe(svg2png({width: 1200, height: 628}, true))
    .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  gulp.src('_site/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});
