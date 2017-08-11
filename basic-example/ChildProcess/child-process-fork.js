// The child_process.fork() method is a special case of child_process.spawn() used specifically to spawn new Node.js processes.

// It is important to keep in mind that spawned Node.js child processes are independent of the parent with exception of the IPC communication channel that is established between the two.
// Each process has its own memory, with their own V8 instances.
// Because of the additional resource allocations required, spawning a large number of child Node.js processes is not recommended.

// child_process.fork(modulePath[, args][, options])
