'use strict';

/**
 * Requires
 */
var util = require('gulp-util');
var PluginError = util.PluginError;
var through = require('through2');
var rework = require('rework');
var replaceRem = require('./lib');

/**
 * PLUGIN_NAME
 * @type {String}
 */
var PLUGIN_NAME = 'ydcss-px2rem';


/**
 * Gulp rem 2 px
 * @param  {Number} size
 * @return {Object}
 */
function rem2px(size) {
    if (typeof size == 'undefined') {
        size = 100
    }
    return through.obj(function (file, enc, callback) {
        if (file.isNull()) {
            this.push(file);
            return callback();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return callback();
        }

        try {
            file.contents = new Buffer(rework(file.contents.toString()).use(replaceRem(size)).toString());
        } catch (err) {
            this.emit('error', new PluginError(PLUGIN_NAME, err));
        }

        this.push(file);
        callback();
    });
}

module.exports = rem2px;
