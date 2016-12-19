var gulp = require('gulp');
var KarmaServer = require('karma').Server;
var q = require('q');
var minify = require('gulp-minify');

gulp.task('mini', function() {
    gulp.src('vector2D.js')
        .pipe(minify({
            ext:{
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest(''))
});

var testFunction = function (done) {
    'use strict';
    var deferred = q.defer();

    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function (exitCode) {
        if (done) {
            done();
        }
        deferred.resolve(exitCode);
    }).start();

    return deferred.promise;
};

var handleTestExit = function (exitCode) {
    'use strict';
    if (exitCode !== 0) {
        console.log('Karma has exited with error code: ' + exitCode);
    }
    process.exit(exitCode);
};

gulp.task('test', function () {
    'use strict';

    testFunction().then(handleTestExit);
});