var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('less', function () {
  return gulp.src('styles/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      compress: true
    }))
    .pipe(gulp.dest('styles'));
});

gulp.task('default', function() {
    gulp.run('webserver','less');
});

gulp.watch('styles/**/*.*', function() {
    gulp.run('less');
});