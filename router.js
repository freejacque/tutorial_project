function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  // if there is a handler for a given pathname...
  if (typeof handle[pathname] === 'function') {
    // we call that function
    handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
    return "404 Not Found";
  }
}

exports.route = route;
