const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('C:\\Tools\\nginx-1.10.1\\conf\\lab\\lab.rcch.ringcentral.com.key'),
    cert: fs.readFileSync('C:\\Tools\\nginx-1.10.1\\conf\\lab\\lab.rcch.ringcentral.com.crt')
};

https.createServer(options, (req, res) => {
    res.statusCode = 200;
    res.end('hello https');
}).listen(8000);


/*
$ curl https://localhost:8000/
curl: (51) SSL: no alternative certificate subject name matches target host name 'localhost'

$ curl -k https://localhost:8000/
hello https

 */
