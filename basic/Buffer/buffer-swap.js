const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

// Prints: <Buffer 01 02 03 04 05 06 07 08>
console.log(buf1);

buf1.swap16();

// Prints: <Buffer 02 01 04 03 06 05 08 07>
console.log(buf1);


const buf2 = Buffer.from([0x1, 0x2, 0x3]);

try {
// Throws an exception: RangeError: Buffer size must be a multiple of 16-bits
    buf2.swap16();
} catch (error) {
    console.log(error);
}


// --------------------------------------------------------

const buf3 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

// Prints: <Buffer 01 02 03 04 05 06 07 08>
console.log(buf3);

buf3.swap32();

// Prints: <Buffer 04 03 02 01 08 07 06 05>
console.log(buf3);


// --------------------------------------------------------

const buf4 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

// Prints: <Buffer 01 02 03 04 05 06 07 08>
console.log(buf4);

buf4.swap64();

// Prints: <Buffer 08 07 06 05 04 03 02 01>
console.log(buf4);
