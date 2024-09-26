require('dotenv').config()
const express=require('express');
const morgan=require('morgan')
const server= express();
const productRouter=require('./routs/route-product');
const userRouter=require('./routs/user');
console.log("env",process.env.DB_PASSWORD);


const { type } = require('os');
const { Agent } = require('http');

//body parser
server.use(express.json())
server.use(morgan('default'))
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)




//MVC modal-view-controller


server.listen(process.env.PORT, ()=>{
     console.log("server started");
     
})



    