const http = require('http');
const dt = require('./myfirstmodule');
const cal = require('./module1');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.end('Now: ' + dt.myDateTime);
  
  const cal1 = new cal();
  res.end('1 + 2 = ' + cal1.add(1, 2));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});