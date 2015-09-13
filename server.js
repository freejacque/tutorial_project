// require the http module and set it to a local variable
// convention is to make the module name as the variable name
var http = require("http");

// createServer is a function in the http module that returns an object
// pass an anonymous function to createServer function
  // http.createServer(function(request, response) {
  //   response.writeHead(200, {"Content-Type": "text/plain"});
  //   response.write("Hello World");
  //   response.end();
  //   // listen is a public method of the object created by createServer
  // }).listen(8888);

  // alternate server code
// var server = http.createServer();
// server.listen(8888);

function start() {
  function onRequest(request, response) {
    console.log("request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("***Kanye Shrug***");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}
exports.start = start;
