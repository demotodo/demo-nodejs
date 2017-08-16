const http = require('http');

const keepAliveAgent = new http.Agent({keepAlive: true});

const options = {
    port: 80,
    hostname: 'www.google.com',
    method: 'GET',
    agent: keepAliveAgent
};

var req = http.request(options, (res) => {
    console.log(res.statusCode, res.statusMessage);
    console.log(res);
});
req.end();
