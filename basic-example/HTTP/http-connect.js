const http = require('http');
const net = require('net');
const url = require('url');

// Create an HTTP tunneling proxy
const proxy = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('okay');
});

proxy.on('connect', (req, cltSocket, head) => {
    // connect to an origin server
    const srvUrl = url.parse(`http://${req.url}`);
    const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
        cltSocket.write('HTTP/1.1 200 Connection Established\r\n'
            + 'Proxy-Agent: Node.js-Proxy\r\n'
            + '\r\n');
        srvSocket.write(head);
        srvSocket.pipe(cltSocket);
        cltSocket.pipe(srvSocket);
    });
});

// now that proxy is running
proxy.listen(1337, '127.0.0.1', () => {
    // make a request a tunneling proxy
    const options = {
        port: 1337,
        hostname: '127.0.0.1',
        method: 'CONNECT',
        path: 'www.google.com:80'
    };

    const req = http.request(options);
    req.end();

    req.on('connect', (res, socket, head) => {
        console.log('got connected!');

        // make a request over an HTTP tunnel
        socket.write('GET / HTTP/1.1\r\n' +
            'Host: www.google.com:8080\r\n' +
            'Connection: close\r\n' +
            '\r\n');

        socket.on('data', (chunk) => {
            console.log('chunk>', chunk.toString());
        });

        socket.on('end', () => {
            proxy.close();
        });
    });
});

// got connected!
// chunk> HTTP/1.1 302 Found
// Cache-Control: private
// Content-Type: text/html; charset=UTF-8
// Referrer-Policy: no-referrer
// Location: http://www.google.com.hk/?gfe_rd=cr&ei=6oGSWae8IcTC8gfd-JmAAw
// Content-Length: 262
// Date: Tue, 15 Aug 2017 05:08:58 GMT
// Connection: close
//
// <HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
// <TITLE>302 Moved</TITLE></HEAD><BODY>
// <H1>302 Moved</H1>
// The document has moved
// <A HREF="http://www.google.com.hk/?gfe_rd=cr&amp;ei=6oGSWae8IcTC8gfd-JmAAw">here</A>.
// </BODY></HTML>
