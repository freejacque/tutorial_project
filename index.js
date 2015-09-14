var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");



// call the server function and pass in the router function "route"
server.start(router.route);
