const fs=require('fs');
const { json } = require('stream/consumers');

const index=fs.readFileSync('index.html', 'utf-8')
const data=JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products=data.products;

const express=require('express');
const { type } = require('os');
const server=express()

const morgan=require('morgan')

server.use(express.json())
server.use(morgan('default'))

server.use(express.static('public'))


// server.use((req,res,next)=>{
// console.log(req.method, req.ip, req.hostname,new Date(), req.get('user-agent'),req.method );
// next()
// })

const auth=(req,res,next)=>{
// console.log(req.query);
// if (req.body.password=='123') {
//      next()
// }else{
//      res.sendStatus(401)
// }
next()
}
server.use(auth)


//api end-point
server.get('/product/:id', auth,(req, res)=>{
     console.log(req.params);
     
 res.json({type:'GET'})
})
server.post('/', auth,(req, res)=>{
 res.json({type:'post'})
})
server.put('/', (req, res)=>{
 res.json({type:'put'})
})
server.delete('/', (req, res)=>{
 res.json({type:'delete'})
})
server.patch('/', (req, res)=>{
 res.json({type:'patch'})
})

server.get('/demo', (req, res)=>{
     // res.send("<h1>hello</h1>")
     // res.sendFile("C:\Users\hp\Desktop\coding file\MERN\FullmernSikhnaHai\index.html")
     // res.json(products)
     // res.sendStatus(404)
})

server.listen(8080, ()=>{
     console.log("server started");
     
})

