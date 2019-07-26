const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;
const config = require('./config').config;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Node.js World\n');
});

server.listen(config.port, config.hostname, () => {
    // console.log('Server running at http://'+config.hostname+':'+config.port+'/');
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});