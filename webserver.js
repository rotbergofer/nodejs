var http = require('http');
var server = http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Hello World\n");
}));
server.listen(8080);

var request = require("request");
request("http://www.google.com",function(err,res,body){
    console.log(body);
});