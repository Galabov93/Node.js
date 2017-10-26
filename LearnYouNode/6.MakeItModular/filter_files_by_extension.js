/*jshint esversion: 6 */
var fs = require('fs');

module.exports = function filterFilesByExtension(path, extension, callback) {
    fs.readdir(path, (err, list) => {
        if (err) {
            lea(err);
        }
        callback();
    });
};