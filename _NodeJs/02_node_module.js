var http = require('http');
var tarih = require('./tarihmodule');

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html; charset=utf8'});
    res.write("Bugünün tarihi ve saati = " + tarih.myDateTime());
    res.end();
}).listen(8080);