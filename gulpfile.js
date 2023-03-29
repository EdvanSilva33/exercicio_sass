const gulp = require('gulp')
const sass = require("gulp-sass")(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglafly = require('gulp-uglify');
const imagengulp = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagengulp())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/styles.js')
        .pipe(uglafly())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' // coloca todo css em uma linha
        }))
        //pegas as funçoes depois do gulp
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles')); // encontra o caminho das pasta

}



exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/styles.js', {ignoreInitial:false}, gulp.series(comprimeJavaScript))
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(comprimeImagens))
}

