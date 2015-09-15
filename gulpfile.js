var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

console.log('Gulpfile is loaded, Ready to run tasks.');


// global settings for gulp
var settings = {
  scriptsFolder: 'scripts/',
  distFolder: 'dist/'
  };

  watch([settings.scriptFolder + 'app/*.js'], function() {
    console.log('Scripts have been changed, let us re bundle');
    gulp.start('default');
  });


//default gulp task
gulp.task('default', function() {
  return gulp.src([settings.scriptFolder + 'lib/jquery.js', settings.scriptsFolder + 'app/*.js'])
  .pipe(concat('distribution-app.js'))
  .pipe(uglify()) // comment out uglify for debugging and development!
  .pipe(gulp.dest(settings.distFolder));
});
