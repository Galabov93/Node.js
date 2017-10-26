var fs = require('fs')
var url = require('url')
var path = require('path')

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname === "/") { //homeage - index page
        fs.readFile(path.resolve(__dirname, "../index.html"), (err, data) => {
            if (err) {
                console.log(err);
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    } else {
        return true;
    }
}