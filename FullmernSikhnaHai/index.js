const http=require('http');
// const { json } = require('stream/consumers');

const fs=require('fs');
const { json } = require('stream/consumers');

const index=fs.readFileSync('index.html', 'utf-8')
const data=JSON.parse(fs.readFileSync('data.json', 'utf-8'))

const products=data.products;



// const data={age:5};
const server=http.createServer((req,res)=>{
     console.log(req.url, req.method);
     if (req.url.startsWith('/product')) {
          const id=req.url.split('/')[2];          
         const product= products.find(p=>p.id===(+id))
         console.log(product);
         res.setHeader('Content-Type', 'text/html')
         let modyfyindex=index.replace('**title**', product.title).replace('**thumbnail**', product.thumbnail).replace('**price**', product.price).replace('**rating**', product.rating)
               res.end(modyfyindex);
               return;
     }

              

     switch(req.url){
          case '/':
     res.setHeader('Content-Type', 'text/html')
          res.end(index);
          break;

          case '/api':
     res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data));
          break;
          
          default:
               res.writeHead(404)
               res.end();
     }
     
     console.log('server starte');
     // res.setHeader('dummy', 'dummyvalue')
     // res.setHeader('Content-Type', 'application/json')


     // res.end("<h1>hello</h1>")
     // res.end(data)
     // res.end(index)

     // res.end(JSON.stringify(data));
})

server.listen(8080);