let fs = require('fs');
let url = require('url');
var path = require('path');

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname === '/favicon.ico') {
        fs.readFile(path.resolve(__dirname, "../favicon.ico"), (err, data) => {
            if (err) {
                console.log("Problem with the favicon. Not found")
            }

            res.writeHead(200);
            res.write(data);
            res.end();
        })
    } else {
        return true;
    }
}