var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// create a handle object to handle requests
var handle = {};
// the handlers are key/value pairs
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

// call the server function and pass in the router function "route"
server.start(router.route, handle);
