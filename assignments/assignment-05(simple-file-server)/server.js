// get the modules
var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer(function (req, res){

    if(req.url == "/"){
        fs.readFile('index.html', function (error, data) {
            res.writeHead(200, {'content-Type' : 'text/html'})
            res.end(data)
        })
    }else{
        // get the file url or path
        var file = `${req.url.substring(1)}`
        // get the extension
        var ext = path.extname(file)
        // contentType
        var contentType = "text/html"
        switch(ext){
            case '.css':
                contentType = "text/css"
                break
            case '.js':
                contentType = "text/javascript"
                break
        }

        // read and load the file
        fs.readFile(file, (error, data) => {
            if(error){
                res.writeHead(200, { 'content-Type': "text.html" })
                res.end("<h1>404 <br> file not found</h1>")
            }else{
                res.writeHead(200, { 'content-Type': contentType })
                res.end(data)
            }
        })
    }

})
// listen to port 3000
server.listen(3000)
console.log("server running !!")