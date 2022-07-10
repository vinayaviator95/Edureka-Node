const http = require("http");
var server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("<h1>this is node server</h1>");
    response.end();
  } else if (request.url === "/hotel") {
    response.write("<h1>this is a hotel page</h1>");
    response.end();
  }
});

server.listen(2222, () => {
  console.log("server is running");
});
