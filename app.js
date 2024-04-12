const data = require('http');
const name = require('./index');

data.createServer((req, rep)=>{
    rep.writeHead(200, {'content-type': 'application/json'});
    rep.write(name())
    rep.end();
}).listen(2000);