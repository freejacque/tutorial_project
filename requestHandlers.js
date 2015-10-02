var querystring = require("querystring"),
    fs = require("fs"); // module that will read the file contents into the server
    formidable = require("formidable");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  // text area to be filled user and submitted in a post request
  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="file" name="upload" multiple="multiple">' +
    '<input type="submit" value="Upload file" />' +
    '</form>' +
    '</body>' +
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");

    fs.rename(files.upload.path, "/tmp/apple_raw.png", function(error) {
      if (error) {
        fs.unlink("/tmp/apple_raw.png");
        fs.rename(files.upload.path, "/tmp/apple_raw.png");
      }
    });
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response) {
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type: "image/png"});
  fs.createReadStream("/tmp/apple_raw.png).pipe(response);
}

exports.start   = start;
exports.upload  = upload;
exports.show    = show;
