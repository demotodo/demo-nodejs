const child_process = require('child_process');

const spawn = child_process.spawn;

const bat = spawn('cmd.exe', ['/c', 'my.bat']);

bat.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});

bat.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});

bat.on('close', code => {
    console.log(`child process exited with code ${code}`);
});

bat.on('error', error => {
    console.log(`error: ${error}`);
});


// --------------------------------------------------------

// Spawns a shell then executes the command within that shell, buffering any generated output.
const exec = child_process.exec;

exec('my.bat', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
});
