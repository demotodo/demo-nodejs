"use strict";

var fs = require('fs');

var readFile = function (fileName, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, function (err, data) {
            if (err)
                reject(data);
            else
                resolve(data);
        });
    })
};

var gen = function*() {
    var r1 = yield readFile('C:/Temp/demo.txt', 'utf-8');
    console.log(r1);

    var r2 = yield readFile('C:/Temp/demo.txt', 'utf-8');
    console.log(r2);
};

function run(gen) {
    var g = gen();

    function next(data) {
        var result = g.next(data);
        if (result.done)
            return result.value;
        result.value.then(data => next(data));
    }

    next();
}

run(gen);
