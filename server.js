// require the http module and set it to a local variable
// convention is to make the module name as the variable name
var http = require("http");
// require url module
var url = require("url");

// createServer is a function in the http module that returns an object
// the start function is being passed the route and the handle object
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

// listen() is a public funtion in the http module
  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}
// start() can now be called by other files to start the server
exports.start = start;
