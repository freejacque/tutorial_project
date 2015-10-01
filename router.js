function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);
  // if there is a handler for a given pathname...
  if (typeof handle[pathname] === 'function') {
    // we call that function
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not Found");
    response.end();
  }
}

exports.route = route;
