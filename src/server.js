const http = require('http'),
process = require('process'),
fs = require('fs'),
path = require('path');


const server = http.createServer((req, res)=> {
  const filePath = path.join(__dirname, '../public/templates/index.html')
  res.writeHead(200, {contentType: 'text/html'})
  fs.readFile(filePath , (err, filedata)=> {
    if(err){
      res.write(err)
    }
    res.write(filedata)
    res.end()
  });
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> {
  process.stdout.write(`Listening to request on port ${PORT}`)
});
