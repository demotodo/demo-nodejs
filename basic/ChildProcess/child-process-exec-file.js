// The child_process.execFile() function is similar to child_process.exec() except that it does not spawn a shell.
// Rather, the specified executable file is spawned directly as a new process making it slightly more efficient than child_process.exec().

// Since a shell is not spawned, behaviors such as I/O redirection and file globbing are not supported.

const execFile = require('child_process').execFile;

const child = execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});
