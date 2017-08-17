const path = require('path');

console.log(path.sep);          // \
console.log(path.delimiter);    // ;

console.log(process.env.PATH.split(path.delimiter));


console.log(path.basename('C:\\temp\\myfile.html'));        // myfile.html
console.log(path.basename('C:\\temp\\myfile.html', '.html'));        // myfile
console.log(path.dirname('C:\\temp\\myfile.html'));        // C:\temp
console.log(path.extname('C:\\temp\\myfile.html'));        // .html


console.log(path.win32.basename('C:\\temp\\myfile.html'));  // myfile.html

console.log(path.posix.basename('/tmp/myfile.html'));       // myfile.html


console.log(path.format({
    dir: 'C:\\temp',
    base: 'file.txt'
}));
// C:\temp\file.txt

console.log(path.parse('C:\\temp\\file.txt'));
// { root: 'C:\\',
//     dir: 'C:\\temp',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file' }

console.log(path.join('C:\\temp', 'file.txt'));     // C:\temp\file.txt

console.log(path.normalize('C:\\temp\\..\\abc\\file.txt'));     // C:\abc\file.txt


path.resolve('/foo/bar', './baz');
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// Returns: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
