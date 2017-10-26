const http = require('http')
const fs = require('fs')
const cluster = require('cluster')
const query = require('querystring')
const multiparty = require('multiparty');

http.createServer((req, res) => {
    if (req.method == "GET") {

        fs.readFile("homepage.html", "utf8", (err, data) => {
            if (err) {
                console.log("I coudn't read the file")
            }
            res.writeHead(200, "{Content-Type: text/html}")
            res.write(data)
            res.end();
        })
    } else if (req.method == "POST") {
        let form = multiparty.Form()

        form.parse(req)

        form.on('part', (part) => {
                if (part.filename) { //this means that we are processing a file (not a field)
                    let body = ""

                    part.on('data', (data) => {
                        body += data
                    })
                } else { //this is a field

                }
            })
            // console.log("We will handle a form here")
            // let result = ''
            // var parsedBody = ''
            // req.on('data', (data) => {
            //     result += data
            // })
            // req.on('end', () => {
            //     parsedBody = query.parse(result);

        //     res.writeHead(200, "{Content-Type: text/plain}")
        //     res.write(result)
        //     res.end();
    })



}
}).listen(3500)

console.log("Server is listening to port 3500")