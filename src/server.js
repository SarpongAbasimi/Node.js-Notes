const http = require('http'),
process = require('process'),
fs = require('fs'),
path = require('path');

const server = http.createServer((req, res)=> {
  res.writeHead(200, { contentType: 'text/plain' })
  res.write('hello')
  res.end()
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> {
  process.stdout.write(`Listening to request on port ${PORT}`)
});