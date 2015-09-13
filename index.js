var server = require("./server");
var router = require("./router");

// call the server function and pass in the router function "route"
server.start(router.route);
