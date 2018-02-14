var fs = require('fs');
var thunkify = require('thunkify');

var readFile = thunkify(fs.readFile);

var gen = function*() {
    var r1 = yield readFile('C:/Temp/demo.txt', 'utf-8');
    console.log(r1);

    var r2 = yield readFile('C:/Temp/demo.txt', 'utf-8');
    console.log(r2);
};

function run(fn) {
    var gen = fn();

    function next(err, data) {
        var result = gen.next(data);
        if (result.done)
            return;
        result.value(next);
    }

    next();
}

run(gen);
