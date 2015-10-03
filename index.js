var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// create a handle object to handle requests
var handle = {};
// the handlers are key/value pairs
// the keys are routes and the values are functions
// the keys are called using routes
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

// call the server function and pass in the router function "route"
server.start(router.route, handle);
