// require the http module and set it to a local variable
var http = require("http");

// createServer is a function in the http module that returns an object
// pass an anonymous function to createServer function
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
  // listen is a method of the object created by createServer
}).listen(8888);

  // alternate server code
// var server = http.createServer();
// server.listen(8888);


