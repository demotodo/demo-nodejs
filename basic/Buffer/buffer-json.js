const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);

const json = buf.toJSON();

console.log(json);      // { type: 'Buffer', data: [ 1, 2, 3, 4, 5 ] }
