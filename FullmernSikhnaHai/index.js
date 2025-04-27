const http=require('http');
// const { json } = require('stream/consumers');

const fs=require('fs')

const index=fs.readFileSync('index.html', 'utf-8')
const data=fs.readFileSync('data.json', 'utf-8')


// const data={age:5};
const server=http.createServer((req,res)=>{

     console.log(req.url);

     switch(req.url){
          case '/':
     res.setHeader('Content-Type', 'text/html')
          res.end(index);
          break;
          case '/api':
     res.setHeader('Content-Type', 'application/json')
          res.end(data);
          break
          default:
               res.end("hello")
               break;
     }
     
     console.log('server started');
     res.setHeader('dummy', 'dummyvalue')
     // res.setHeader('Content-Type', 'application/json')


     // res.end("<h1>hello</h1>")
     // res.end(data)
     res.end(index)

     // res.end(JSON.stringify(data));
})

server.listen(8080);