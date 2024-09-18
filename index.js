const fs=require('fs')
const index=fs.readFileSync('index.html', 'utf-8')
const data=JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products=data.products;


const express=require('express');
const morgan=require('morgan')

const { type } = require('os');
const { Agent } = require('http');
const server= express();

server.use(express.json())

server.use(morgan('default'))

server.use(express.static('public'))

// server.use((req,res,next)=>{
//      console.log(req.method,req.ip,req.hostname,new Date(), req.get('User-Agent'));
//      next()
// })

const auth= (req,res,next)=>{
     // console.log(req.query);

     // if (req.body.password=='123') {
     //      next()
     // } else {
     //      res.sendStatus(401);
     // }
     next()
}


//API - endpoint - Route
server.get('/product/:id',auth, (req, res)=>{
     console.log(req.params);
     
     res.json({type:'GET'})
})

server.post('/',auth, (req, res)=>{
     res.json({type:'post'})
})

server.put('/', (req, res)=>{
     res.json({type:'Put'})
})

server.delete('/', (req, res)=>{
     res.json({type:'delete'})
})

server.patch('/', (req, res)=>{
     res.json({type:'Patch'})
})

server.get('/demo', (req, res)=>{
     // res.json(products)
     // res.sendStatus(404)
     // res.sendStatus(201).send("<h1>hello express</h1>")
     // res.sendFile("C:\Users\hp\Desktop\coding file\MERN\index.html")
})







server.listen(8080, ()=>{
     console.log("server started");
     
})



    