const express=require('express');
const morgan=require('morgan')
const server= express();
const productRouter=require('./routs/route-product');
const userRouter=require('./routs/user');

const { type } = require('os');
const { Agent } = require('http');

//body parser
server.use(express.json())
server.use(morgan('default'))
server.use(express.static('public'))
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)


//MVC modal-view-controller


server.listen(8080, ()=>{
     console.log("server started");
     
})



    