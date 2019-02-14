var gulp = require('gulp');
var terser = require('gulp-terser');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var versionNumber = require('gulp-version-number');
var replace = require('gulp-replace');
var gulpSequence = require('gulp-sequence')
var babel = require("gulp-babel");

var versionConfig = {
    // 'value' : makeid(),
    'value': '%MDS%',
    'append': {
        'key': '_v',
        'to': ['css', 'js'],
        'cover': 1
    }
};

//File path
var SCRIPTS_PATH = 'src/main/webapp/assets/js/**/*.js';
var DIST_PATH = 'src/main/webapp/assets/dist';
var CSS_PATH = 'src/main/webapp/assets/css/**/*.css';

//make versioning id
// function makeid() {
// 	var d = new Date();
// 	var datestring = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2)
// 		+ "-" + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
// 	return datestring;
// }

//Styles
gulp.task('styles', function () {
    console.log('starting styles task');

    return gulp.src(CSS_PATH)
        .pipe(plumber(function (err) {
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        //.pipe(sourcemaps.init())
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(cleanCSS())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH + '/css'))
        .pipe(livereload());
})

//Jsp versions css & js
gulp.task('version-latest', function () {
    console.log('starting version task');

    return gulp.src(['src/main/webapp/view/latest/footer.jsp', 'src/main/webapp/view/latest/header.jsp'])
        .pipe(versionNumber(versionConfig))
        .pipe(gulp.dest('src/main/webapp/view/latest'))
})

gulp.task('version', function () {
    console.log('starting version task');

    return gulp.src(['src/main/webapp/view/footer.jsp', 'src/main/webapp/view/header.jsp'])
        .pipe(versionNumber(versionConfig))
        .pipe(gulp.dest('src/main/webapp/view'))
})

//Script
gulp.task('scripts', function () {
    console.log('starting scripts task');

    return gulp.src(SCRIPTS_PATH)
        .pipe(plumber(function (err) {
            console.log('Scripts Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(babel())
        // .pipe(sourcemaps.init())
        .pipe(terser())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH + '/js'))
        .pipe(livereload());
})

//Clean
gulp.task('clean', function () {
    return del.sync([
        DIST_PATH
    ]);
})

//Clean version scripts and styles
gulp.task('remove-version', function () {
    return gulp.src(['src/main/webapp/view/footer.jsp', 'src/main/webapp/view/header.jsp'])
        //.pipe(replace(/\?v=[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-(2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/g,''))
        .pipe(replace(/\?_v=\w*/g, ''))
        .pipe(gulp.dest('src/main/webapp/view'))
})

gulp.task('remove-version-latest', function () {
    return gulp.src(['src/main/webapp/view/latest/footer.jsp', 'src/main/webapp/view/latest/header.jsp'])
        //.pipe(replace(/\?v=[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-(2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/g,''))
        .pipe(replace(/\?_v=\w*/g, ''))
        .pipe(gulp.dest('src/main/webapp/view/latest'))
})

gulp.task('remove-all-version', gulpSequence(['remove-version', 'remove-version-latest']));

//Watch
gulp.task('watch', function () {
    console.log('starting watch task');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH, ['scripts']);
    gulp.watch(CSS_PATH, ['styles']);
})

gulp.task('build', gulpSequence('clean', ['styles', 'scripts'], ['remove-version', 'remove-version-latest'], ['version', 'version-latest']));
gulp.task('remove-all-version', gulpSequence(['remove-version', 'remove-version-latest']));
