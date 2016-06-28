console.log('hello world');

for (var i = 0, length = process.argv.length; i < length; i++) {
    console.log(process.argv[i]);
}

var http = require("http"),
    server,
    HTTP_OK = 200,
    PORT = 8000;

server = http.createServer(function (request, response) {
    response.writeHead(HTTP_OK, {
        "Content-Type": "text/html"
    });
    response.write("<h1>hello, world</h1>");
    response.end();
});

server.listen(PORT);

console.log("Now try connect to http://localhost:" + PORT);
