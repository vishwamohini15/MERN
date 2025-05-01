require('dotenv').config()

const express=require('express');
const { type } = require('os');
const server=express()
const morgan=require('morgan')
const productRouter=require('./routs/product')
const userRouter=require('./routs/user')

console.log('env', process.env.DB_password);

//bodyparse
server.use(express.json())
server.use(morgan('default'))
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)



server.listen(process.env.PORT, ()=>{
     console.log("server started");
     
})

