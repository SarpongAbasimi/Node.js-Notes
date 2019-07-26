const http = require('http'),
process = require('process'),
fs = require('fs'),
path = require('path');


const server = http.createServer((req, res)=> {
  const filePath = path.join(__dirname, '../public/templates/index.html')
  let requestUrl = req.url;
  switch (requestUrl) {
    case '/':
      fs.readFile(filePath , (err, filedata)=> {
      if(err){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('sorry there was an error')
        res.end()
      }
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(filedata)
      res.end()
    });    
      break;
      
    case '/static/index.css':
      fs.readFile(path.join(__dirname, '../public/static/index.css'), (err, data)=>{
        if(err){
          res.writeHead(200, {'Content-Type': 'text/css'})
          res.write('sorry ther was an error')
          res.end()
        }else {
          res.writeHead(200, {'Content-Type': 'text/css'})
          res.write(data)
          res.end()
        }
      });
      break;
    default:
      res.write('I have nothing for this endpoint')
      res.end()
      break;
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> {
  process.stdout.write(`Listening to request on port ${PORT}`)
});
