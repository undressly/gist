var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    del = require('del'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('app/template/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('app/template/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/template/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/template/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    del.sync('dist');
});

gulp.task('clear', function () {
    cache.clearAll();
});

gulp.task('img', function() {
    gulp.src('app/template/img/**/*')
        .pipe(gulp.dest('dist/template/img'));
});

gulp.task('build', ['clean', 'img', 'sass'], function() {
    var buildCss = gulp.src('app/template/css/**/*.css')
    .pipe(gulp.dest('dist/template/css'))

    var buildSass = gulp.src('app/template/sass/**/*')
    .pipe(gulp.dest('dist/template/sass'))

    var buildFonts = gulp.src('app/template/fonts/**/*')
    .pipe(gulp.dest('dist/template/fonts'))

    var buildJs = gulp.src('app/template/js/**/*')
    .pipe(gulp.dest('dist/template/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

    var buildLibs = gulp.src('app/template/libs/**/*')
    .pipe(gulp.dest('dist/template/libs'))

    var buildOthers = gulp.src('app/*.ico')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);
