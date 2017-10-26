var fs = require('fs')
var url = require('url')
var path = require('path')

function getContentType(ourUrl) {
    if (ourUrl.endsWith('.css')) {
        return "Content-Type : text/css";
    } else if (ourUrl.endsWith('.js')) {
        return "Content-Type : application/javascript";
    } else if (ourUrl.endsWith('.html')) {
        return "Content-Type : text/html";
    } else if (ourUrl.endsWith('.jpg')) {
        return "Content-Type : image/jpeg";
    }
}


module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;


    fs.readFile("." + req.pathname, (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404);
            res.write("The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent")
            res.end();
            return true;
        } else {
            let contentType = getContentType(req.pathname);

            res.writeHead(200, { contentType });
            res.write(data);
            res.end();
        }


    })
}