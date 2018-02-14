console.assert(true, 'good');

try {
    console.assert(false, 'bad');
} catch (error) {
    console.log(error);
}


// --------------------------------------------------------

var obj = new Object();
obj.a = 123;
obj.b = 'abc';

// Uses util.inspect() on obj and prints the resulting string to stdout. This function bypasses any custom inspect() function defined on obj.
console.dir(obj);
// { a: 123, b: 'abc' }


// --------------------------------------------------------

console.time('label-1');
let r = 0;
for (let i = 0; i < 10000000; i++) {
    r += i;
}
console.log(r);
console.timeEnd('label-1');     // label-1: 103.425ms


// --------------------------------------------------------

