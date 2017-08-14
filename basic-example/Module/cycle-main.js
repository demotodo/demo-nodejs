// If you have cyclic module dependencies in your program, make sure to plan accordingly.

console.log('main starting');

const a = require('./cycle-a');

const b = require('./cycle-b');

console.log('in main, a.done=%s, b.done=%s', a.done, b.done);

// main starting
// a starting
// b starting
// in b, a.done = false
// b done
// in a, b.done = true
// a done
// in main, a.done=true, b.done=true
