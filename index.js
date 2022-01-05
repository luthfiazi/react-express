const http = require ('http');
// const hello = require('./hello');
const moment = require ('moment')

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.write(moment().calendar());
    res.write(JSON.stringify({
        'status' : 'success',
        'message': 'response success'
    }))
    res.end();
});

const hostname = '127.0.0.1'
const port = 4000
server.listen(port, hostname, ()=>{
    console.log(`server listen at: ${hostname}:${port}/`);
})