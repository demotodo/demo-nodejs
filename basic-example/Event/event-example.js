const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
myEmitter.prop = 'abc';

myEmitter.on('event', () => {
    console.log('f1 - an event occurred!');
});
myEmitter.on('event', () => {
    console.log('f2 - an event occurred!');
});

myEmitter.on('p', function (a, b) {     // to use 'this', can't use lambada expression here
    console.log(`a: ${a}, b: ${b}`);
    console.log('this:', this);
});
// a: 1, b: 2
// this: MyEmitter {
//     domain: null,
//     _events: { event: [ [Function], [Function] ], p: [Function] },
//     _eventsCount: 2,
//     _maxListeners: undefined,
//     prop: 'abc' }

myEmitter.emit('event');

myEmitter.emit('p', '1', '2');
