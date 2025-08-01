var http = require('http');

http.createServer(function (req, res){
    res.end('funcionando');
}).listen(8181);

console.log("ok");