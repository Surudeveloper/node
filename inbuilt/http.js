var http = require('http');
var server = http.createServer(function(req, res){
   res.write('<h1>Created server with nodeJS</h1>') 
   res.end()
})

server.listen(3450)