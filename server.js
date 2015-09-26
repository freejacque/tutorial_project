// require the http module and set it to a local variable
// convention is to make the module name as the variable name
var http = require("http");
// require url module
var url = require("url");

// createServer is a function in the http module that returns an object
// the start function is being passed the route and the handle object
function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    // defined the expected encoding of the received data
    request.setEncoding("utf8");

    //  data is received in chunks and concatenated to form postData
    request.addListener("data", function(postDataChunk){
      postData += postDataChunk;
      console.log("Received POST data chunk '" +
        postDataChunk + "'.");
    });

    // once all data has been gathered, the router is called and passed the data
    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });

  }

// listen() is a public funtion in the http module
  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}
// start() can now be called by other files to start the server
exports.start = start;
