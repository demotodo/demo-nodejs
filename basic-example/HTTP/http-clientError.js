const http = require('http');

const server = http.createServer((req, res) => {
    res.end();
});

// When the 'clientError' event occurs, there is no request or response object,
// so any HTTP response sent, including response headers and payload, must be written directly to the socket object.
// Care must be taken to ensure the response is a properly formatted HTTP response message.
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000);
