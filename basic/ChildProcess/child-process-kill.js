const spawn = require('child_process').spawn;

// const grep = spawn('grep', ['ssh']);
//
// grep.on('close', (code, signal) => {
//     console.log(
//         `child process terminated due to receipt of signal ${signal}`);
// });
//
// Send SIGHUP to process
// grep.kill('SIGHUP');


const child = spawn(
    'sh',
    [
        '-c',
        `node -e "setInterval(() => {
            console.log(process.pid, 'is alive')
        }, 500);"`
    ], {
        stdio: ['inherit', 'inherit', 'inherit']
    }
);

setTimeout(() => {
    child.kill(); // does not terminate the node process in the shell
}, 2000);
