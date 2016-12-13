/*eslint-env node*/
import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import pump from 'pump';
import source from 'vinyl-source-stream';




function buildJS(sourceFile) {
  return browserify(sourceFile)
    .transform(babelify, {
      presets: ['es2015', 'react', 'stage-2']
    })
    .bundle();
}

gulp.task('JS', () => {
  return pump([
    buildJS('./index.js'),
    source('bundle.js'),
    gulp.dest('./'),
  ]);
});

