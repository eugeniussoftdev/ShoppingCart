
var gulp = require('gulp');
var livereload = require('gulp-livereload');

/*
    jshint -------------
*/

// getting jshint options
var packageJSON  = require('./package.json');
var jshintConfig = packageJSON.jshintConfig;
jshintConfig.lookup = false;

// getting jshint and reporter
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

// creating a task
gulp.task('lint', function() {
    return gulp.src(['src/**/*.js', '!src/lib/**/*.*'])
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter(stylish));
});


/*
    js bundle -------------
 */
var concat = require('gulp-concat');

gulp.task('js', function () {
    gulp.src(['src/**/*.module.js', 'src/**/*.js', '!src/lib/**/*'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload())
});


/*
    css bundle -------------
*/
gulp.task('css', function () {
    gulp.src('src/**/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload())
});


/*
    html --------------
*/
gulp.task('html', function () {
    gulp.src(['src/**/*.html', 'src/**/*.json'])
        .pipe(gulp.dest('dist'))
        .pipe(livereload())
});

gulp.task('build', ['js', 'css', 'html']);


/*
    watch --------------
 */
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.js',   ['js']);
    gulp.watch('src/**/*.css',  ['css']);
});


/*
    server -------------
*/
var serve = require('gulp-serve');
gulp.task('serve', ['build'], serve('dist'));



gulp.task('default', ['serve', 'watch']);
