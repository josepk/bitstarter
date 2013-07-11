/*var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/

var http = require('http'),
    fs = require('fs'),
    util = require('util'),
    url = require('url');

var server = http.createServer(function(req, res) {
    if(url.parse(req.url).pathname == '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        var rs = fs.createReadStream('index.html');
        util.pump(rs, res);
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        var rs = fs.createReadStream('404.html');
        util.pump(rs, res);
    }
});

server.listen(8080);
