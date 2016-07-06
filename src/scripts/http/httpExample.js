var http = require("http"),
    server,
    HTTP_OK = 200,
    PORT = 3000;

server = http.createServer(function (request, response) {
    response.writeHead(HTTP_OK, {
        "Content-Type": "text/html"
    });
    response.write("<h1>hello, world</h1>");
    response.end();
});

server.listen(PORT);

console.log("Now try connect to http://localhost:" + PORT);
