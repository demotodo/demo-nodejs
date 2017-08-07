var express = require('express'),
    http = require('http'),
    socketIo = require('socket.io'),

    app = express(),
    server = http.createServer(app),
    io = socketIo.listen(server),
    PORT = 4000;

app.use("/", express.static(__dirname));

io.sockets.on("connection", function (socket) {
    socket.emit("data-from-server", "ready and waiting for messages");

    socket.on("data-from-client", function (data) {
        socket.emit("data-from-server", {
            received: data
        });
    });
});

server.listen(PORT);

console.log("Now try browsing http://localhost:" + PORT);
