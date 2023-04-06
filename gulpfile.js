const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function copiaHtml(){
    return gulp.src('./source/*.html')
        .pipe(gulp.dest('./build'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagem() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.default = function() {
    gulp.watch('./source/*.html', {ignoreInitial: false} , gulp.series(copiaHtml)) 
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false} , gulp.series(compilaSass)) 
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false} , gulp.series(comprimeJavaScript)) 
    gulp.watch('./source/images/*', {ignoreInitial: false} , gulp.series(comprimeImagem))
};
