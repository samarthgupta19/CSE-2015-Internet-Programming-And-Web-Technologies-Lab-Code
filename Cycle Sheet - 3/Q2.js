// 19BDS0042 SAMARTH GUPTA

var http = require('http');  var fs = require('fs');
http.createServer(function (req, res)
{
fs.readFile('Q2.html', function(err, data) {  res.writeHead(200, {'Content-Type': 'text/html'});  res.write(data);
res.end();
});}).listen(8080);
