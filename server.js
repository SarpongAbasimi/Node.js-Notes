const http = require('http'),
process = require('process')

const server = http.createServer((req, res)=> {
  res.writeHead(200, { contentType: 'text/plain' })
  res.write('Hello Node')
  res.end()
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> {
  process.stdout.write(`Listening to request on port ${PORT}`)
});