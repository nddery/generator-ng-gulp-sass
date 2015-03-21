'use strict';

var gulp = require('gulp');

function browserSyncInit(baseDir, files, browser) {
var browserSync = require('browser-sync'),
    devip       = require('dev-ip')(),
    proxy       = require('proxy-middleware'),
    url         = require('url'),
    apiRoot     = 'localhost';

  browser = browser === undefined ? 'default' : browser;
  startPath = startPath === undefined ? '/' : startPath;
  port = port === undefined ? 3000 : port;

  if (devip && devip.length) {
    apiRoot = devip[0];
  }

  var proxyOptions = url.parse('http://' + apiRoot);
  proxyOptions.route = '/API_PROXY';

  browserSync.instance = browserSync.init(files, {
    startPath: '/index.html',
    server: {
      baseDir: baseDir,
      middleware: [proxy(proxyOptions)]
    },
    browser: browser
  });

}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    'app',
    '.tmp'
  ], [
    'app/*.html',
    '.tmp/styles/**/*.css',
    'app/scripts/**/*.js',
    'app/partials/**/*.html',
    'app/images/**/*'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit('dist');
});

gulp.task('serve:e2e', function () {
  browserSyncInit(['app', '.tmp'], null, []);
});

gulp.task('serve:e2e-dist', ['watch'], function () {
  browserSyncInit('dist', null, []);
});
