const err = new Error('msg');

console.log(err);
console.log(err.message);
console.log(err.stack);


// --------------------------------------------------------

console.log(Error.stackTraceLimit);

const obj = {};
Error.captureStackTrace(obj);
console.log(obj.stack);


// --------------------------------------------------------

function MyError() {
    Error.captureStackTrace(this, MyError);
}

// Without passing MyError to captureStackTrace, the MyError frame would show up in the .stack property.
// By passing the constructor, we omit that frame, and retain all frames below it.
console.log(new MyError().stack);
