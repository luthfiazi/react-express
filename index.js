const http = require ('http');
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World!');
    res.end();
}).listen(4000)