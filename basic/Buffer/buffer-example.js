const buf1 = Buffer.alloc(10);

const buf2 = Buffer.from([1, 2, 3]);

for (const b of buf2) {
    console.log(b);
}
// 1
// 2
// 3

for (const b of buf2.entries()) {
    console.log(b);
}
// [ 0, 1 ]
// [ 1, 2 ]
// [ 2, 3 ]


// --------------------------------------------------------

const buf3 = Buffer.from('hello world', 'ascii');

console.log(buf3.toString('hex'));      // 68656c6c6f20776f726c64

console.log(buf3.toString('base64'));   // aGVsbG8gd29ybGQ=

// The character encodings currently supported by Node.js include:
//     'ascii' - for 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.
//     'utf8' - Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
//     'utf16le' - 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.
//     'ucs2' - Alias of 'utf16le'.
//     'base64' - Base64 encoding. When creating a Buffer from a string, this encoding will also correctly accept "URL and Filename Safe Alphabet" as specified in RFC4648, Section 5.
//     'latin1' - A way of encoding the Buffer into a one-byte encoded string (as defined by the IANA in RFC1345, page 63, to be the Latin-1 supplement block and C0/C1 control codes).
//     'binary' - Alias for 'latin1'.
//     'hex' - Encode each byte as two hexadecimal characters.
// Note: Today's browsers follow the WHATWG spec which aliases both 'latin1' and ISO-8859-1 to win-1252.


// --------------------------------------------------------

const str = '\u00bd + \u00bc = \u00be';

// Prints: ½ + ¼ = ¾: 9 characters, 12 bytes
console.log(`${str}: ${str.length} characters, ${Buffer.byteLength(str, 'utf8')} bytes`);
