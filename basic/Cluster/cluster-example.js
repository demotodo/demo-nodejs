// A single instance of Node.js runs in a single thread.
// To take advantage of multi-core systems the user will sometimes want to launch a cluster of Node.js processes to handle the load.

// The cluster module allows you to easily create child processes that all share server ports.

// The worker processes are spawned using the child_process.fork() method, so that they can communicate with the parent via IPC and pass server handles back and forth.

// The cluster module supports two methods of distributing incoming connections.
// The first one (and the default one on all platforms except Windows), is the round-robin approach,
//      where the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.
// The second approach is where the master process creates the listen socket and sends it to interested workers. The workers then accept incoming connections directly.

// The second approach should, in theory, give the best performance.
// In practice however, distribution tends to be very unbalanced due to operating system scheduler vagaries.
// Loads have been observed where over 70% of all connections ended up in just two processes, out of a total of eight.

// There is no routing logic in Node.js, or in your program, and no shared state between the workers.
// Therefore, it is important to design your program such that it does not rely too heavily on in-memory data objects for things like sessions and login.

// Because workers are all separate processes, they can be killed or re-spawned depending on your program's needs, without affecting other workers.
// As long as there are some workers still alive, the server will continue to accept connections.
// If no workers are alive, existing connections will be dropped and new connections will be refused.
// Node.js does not automatically manage the number of workers for you, however. It is your responsibility to manage the worker pool for your application's needs.


const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // workers can share any TCP connection
    // in this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
