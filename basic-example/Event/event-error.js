const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

process.on('uncaughtException', (err) => {
    console.error('whoops! it\'s an error');
});

myEmitter.emit('error', new Error('whoops!'));
