const  http = require('http')

var createServer = http.createServer((function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
}));
createServer.listen(3000);