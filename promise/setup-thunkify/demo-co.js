var fs = require('fs');
var thunkify = require('thunkify');
var co = require('co');

var readFile = thunkify(fs.readFile);

var gen = function*() {
    var r1 = yield readFile('C:/Temp/demo.txt', 'utf-8');
    console.log(r1);

    var r2 = yield readFile('C:/Temp/demo.txt', 'utf-8');
    console.log(r2);
};

co(gen);
