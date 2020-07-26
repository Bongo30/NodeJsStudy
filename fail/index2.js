var  http = require('http');
const parseUrl = require('url');
var  fs = require('fs');

var querystring =require('querystring');
//create a server object:
http.createServer(function (req, res) {

var uri = req.uri;
var query = url.parse(uri, true).query;
if(req.method == 'GET') {
  res.writeHead(200, {"Content-type": "text/html"});
  res.end("ID: " + query.id + 'pwd: ' + query.pwd );
} else if(req.method =='POST') {
  req.on('data', function(chunck) {
    console.log(chunk.toString());
    var data = querystring.parse(chunk.toString());
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(' id : ' + data.fid + 'pwd : ' + data.fpw);
  });
}

}).listen(8080); //the server object listens on port 8080
console.log('server start.... port : 8080');
