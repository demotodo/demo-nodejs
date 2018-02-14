// Buffer instances are also Uint8Array instances.

const arr = new Uint16Array(2);

arr[0] = 5000;      // 0x1388
arr[1] = 4000;      // 0x0fa0

// Copies the contents of `arr`
const buf1 = Buffer.from(arr);

// Shares memory with `arr`
const buf2 = Buffer.from(arr.buffer);

console.log(buf1.length);   // 2

// Prints: <Buffer 88 a0>
console.log(buf1);

console.log(buf2.length);   // 4

// Prints: <Buffer 88 13 a0 0f>
console.log(buf2);


arr[1] = 6000;      // 0x1770

// Prints: <Buffer 88 a0>
console.log(buf1);

// Prints: <Buffer 88 13 70 17>
console.log(buf2);


// --------------------------------------------------------

const arr2 = new Uint16Array(20);

console.log(arr2.length);                       // 20
console.log(Buffer.from(arr2).length);          // 20

console.log(Buffer.from(arr2.buffer).length);           // 40
console.log(Buffer.from(arr2.buffer, 0, 16).length);    // 16
