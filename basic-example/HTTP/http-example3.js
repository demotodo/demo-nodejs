"use strict";

const http = require('http');

http.createServer((request, response) => {
    const {headers, method, url} = request;

    console.log("%s %s, with agent %s", method, url, headers['user-agent']);

    let body = [];

    request.on('error', err => {
        console.error(err);
    }).on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('X-Powered-By', 'nodejs-http');
        response.write(JSON.stringify({method, url, headers, body}));
        response.end();
    });

}).listen(8080);
