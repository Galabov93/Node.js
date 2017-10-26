var http = require('http');

var server = http.createServer((requst, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello world from the server\n");
});

server.listen(80);