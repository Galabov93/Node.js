"use strict"

var http = require('http');
var path = require("path");
var fs = require('fs');
const url = require('url');

const favicon = require("./handlers/faviconHandler")
const homepageHandler = require("./handlers/homepageHandler")
const staticFiles = require("./handlers/staticFiles")

let port = 9615;


http.createServer(function(req, res) {

    let handlers = [
        favicon,
        homepageHandler,
        staticFiles
    ]

    for (let handler of handlers) {
        let next = handler(req, res)
        if (!next) {
            break;
        }
    }

}).listen(port);

console.log('Server listening to port:', port);