const http = require('http');

http.get('http://nodejs.org/dist/index.json', (res) => {
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error(`Request Failed. Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error(`Invalid content-type: ${contentType}`);
    }
    if (error) {
        console.log(error.message);
        res.resume();
        return;
    }

    res.setEncoding('utf8');

    let rawData = '';

    res.on('data', (chunk) => rawData += chunk);

    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (e) {
            console.log(e.message);
        }
    });
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});
