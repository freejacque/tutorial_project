// require the http module and set it to a variable
var http = require("http");

// createServer is a function in the http module that returns an object
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
  // listen is a method of the object created by createServer
}).listen(8888);
