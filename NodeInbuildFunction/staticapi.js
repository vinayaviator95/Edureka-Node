const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  fs.readFile("textFile.txt", "utf-8", (err, data) => {
    if (err) throw console.log(err);
    res.write(data);
    res.end();
  });
});
server.listen(1111);
