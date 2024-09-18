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


//API - endpoint - Route

//products
//API roots baseurl, google.com/api/v3

//create post/products        C R U D
server.post('/products', (req, res)=>{
     console.log(req.body);
     products.push(req.body);
     res.status(201).json(req.body)
})

//Read get /products
server.get('/products', (req, res)=>{
     res.json(products)
})

//Read get /products/:id
server.get('/products/:id', (req, res)=>{
     const id= +req.params.id
       const product=products.find(p=>p.id===id)
     res.json(product)
})


//update put /products/:id
server.put('/products/:id', (req, res)=>{
     const id= +req.params.id
       const productindex=products.findIndex(p=>p.id===id)
       products.splice(productindex,1,{...req.body,id:id})

     res.status(201).json()
})


//update patch /products/:id
server.patch('/products/:id', (req, res)=>{
     const id= +req.params.id
       const productindex=products.findIndex(p=>p.id===id)
       const product=products[productindex]
       products.splice(productindex,1,{...product,...req.body})

     res.status(201).json()
})

//Delete put /products/:id
server.delete('/products/:id', (req, res)=>{
     const id= +req.params.id
       const productindex=products.findIndex(p=>p.id===id)
       const product=products[productindex]
       products.splice(productindex,1)

     res.status(201).json(product)
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



    