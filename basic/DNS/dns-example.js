const dns = require('dns');

console.log('dns servers:', dns.getServers());

dns.lookup('nodejs.org', (err, addresses, family) => {
    console.log('addresses:', addresses, ", family:", family);
});


dns.lookupService('10.32.52.131', 80, (err, hostname, service) => {
    console.log(err, hostname, service);
});
