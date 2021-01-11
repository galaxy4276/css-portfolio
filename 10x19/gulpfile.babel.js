import gulp from 'gulp';
import del from 'del';
import sass from 'gulp-sass';
import minify from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';

sass.compiler = require('node-sass');

const router = {
  css: {
    watch: 'src/scss/*',
    src: 'src/scss/styles.scss',
    dest: './dist/css'
  }
};

const styles = () =>
  gulp
    .src(router.css.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: 'autoplace',
      }),
    )
    .pipe(minify())
    .pipe(gulp.dest(router.css.dest));


const watch = () => {
  gulp.watch(router.css.watch, styles);
};

const clean = () => del(['dist/styles.scss']);

const prepare = gulp.series([clean]);
const live = gulp.parallel([watch]);
const assets = gulp.series([styles]);

export const dev = gulp.series([prepare, assets, live]);
