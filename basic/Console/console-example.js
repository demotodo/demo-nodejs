// The global console is a special Console whose output is sent to process.stdout and process.stderr. It is equivalent to calling:
//      new Console(process.stdout, process.stderr);

const fs = require('fs');

const out = fs.createWriteStream('./stdout.log');
const err = fs.createWriteStream('./stderr.log');

const myConsole = new console.Console(out, err);        // require('console').Console

myConsole.log('hello world');
// Prints: hello world, to out

myConsole.log('hello %s', 'world');
// Prints: hello world, to out

myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err

const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
