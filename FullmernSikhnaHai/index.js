const fs=require('fs');
const { json } = require('stream/consumers');

const index=fs.readFileSync('index.html', 'utf-8')
const data=JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products=data.products;

const express=require('express');
const { type } = require('os');
const server=express()
const morgan=require('morgan')

//bodyparse
server.use(express.json())
server.use(morgan('default'))
server.use(express.static('public'))

// server.use(auth)

    //create post   C R U D
    server.post('/products',(req, res)=>{
     console.log(req.body);
     products.push(req.body)
 res.status(201).json(req.body)
})


//read products get
server.get('/products',(req, res)=>{
 res.json(products)
})
//read products get id
server.get('/products/:id',(req, res)=>{
     const id=+req.params.id
     const product=products.find(p=>p.id===id)
     
     res.json(product)
    })

// update put/id
    server.put('/products/:id',(req, res)=>{
     const id=+req.params.id
     const productindex=products.findIndex(p=>p.id===id)
     products.splice(productindex,1,{...req.body,id:id})
     res.status(201).json()
    })
// update patch/id
server.patch('/products/:id',(req, res)=>{
     const id=+req.params.id
     const productindex=products.findIndex(p=>p.id===id)
     const product=products[productindex]
     products.splice(productindex,1,{...product,...req.body})
     res.status(201).json()
    })

  // update delete/id
  server.delete('/products/:id',(req, res)=>{
     const id=+req.params.id
     const productindex=products.findIndex(p=>p.id===id)
     const product=products[productindex]
     products.splice(productindex,1)
     res.status(201).json(product)
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

