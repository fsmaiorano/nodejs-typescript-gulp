const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', ['static'], () => {

    const tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())

    return tsResult.js
        .pipe(sourcemaps.write('.', {
            sourceRoot: function (file) { return file.cwd + '/src'; }
        }))
        .pipe(gulp.dest('dist'));

});

gulp.task('static', ['clean'], () => {

    return gulp
        .src(['src/**/*.json'])
        .pipe(gulp.dest('dist'));

});

gulp.task('clean', () => {

    return gulp
        .src('dist')
    // .pipe(clean());

});

gulp.task('build', ['scripts']);

gulp.task('watch', ['build'], () => {

    return gulp.watch(['src/**/*.ts', 'src/**/*.json'], ['build']);

});

gulp.task('default', ['watch']);