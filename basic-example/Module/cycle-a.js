console.log('a starting');

exports.done = false;

const b = require('./cycle-b');
console.log('in a, b.done = %s', b.done);

exports.done = true;
console.log('a done');
