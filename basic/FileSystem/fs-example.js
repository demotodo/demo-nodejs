const fs = require('fs');

try {
    fs.unlink('/tmp/hello', (err) => {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log('successfully deleted /tmp/hello');
    });
} catch (err) {
    console.error(err.message);
}


try {
    fs.unlinkSync('/tmp/hello');
    console.log('successfully deleted /tmp/hello');
} catch (err) {
    console.error(err.message);
}


// --------------------------------------------------------

fs.access('/etc/passwd', fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log(err ? 'no access!' : 'can read/write');
});


// --------------------------------------------------------

// https://nodejs.org/docs/v6.11.2/api/fs.html#fs_fs_constants_1

console.log(fs.constants);
// { O_RDONLY: 0,           // file open constants
//     O_WRONLY: 1,         // file open constants
//     O_RDWR: 2,           // file open constants
//     S_IFMT: 61440,   // file type constants
//     S_IFREG: 32768,  // file type constants
//     S_IFDIR: 16384,  // file type constants
//     S_IFCHR: 8192,   // file type constants
//     S_IFLNK: 40960,  // file type constants
//     O_CREAT: 256,        // file open constants, create if not exist
//     O_EXCL: 1024,        // file open constants, fail if exist and O_CREAT
//     O_TRUNC: 512,        // file open constants
//     O_APPEND: 8,         // file open constants
//     F_OK: 0,         // file access constants, visible
//     R_OK: 4,         // file access constants, read
//     W_OK: 2,         // file access constants, write
//     X_OK: 1 }        // // file access constants, execute


// --------------------------------------------------------

fs.stat('/', (err, stats) => console.log(stats));
// Stats {
//     dev: 1845991526,
//     mode: 16822,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: undefined,
//     ino: 1407374883553285,
//     size: 0,
//     blocks: undefined,
//     atime: 2017-08-14T00:36:15.046Z,
//     mtime: 2017-08-14T00:36:15.046Z,
//     ctime: 2017-08-14T00:36:15.046Z,
//     birthtime: 2016-04-20T01:36:11.977Z }


// --------------------------------------------------------
