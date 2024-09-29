require('dotenv').config()
const express=require('express');
const morgan=require('morgan')
const mongoose = require('mongoose');
// const { Schema } = mongoose;
const cors = require('cors')
const server= express();
const productRouter=require('./routs/route-product');
const userRouter=require('./routs/user');
console.log("env",process.env.DB_PASSWORD);


//db connection

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommercedatabase');
console.log('database connected');

}

//ecommerce
//schema



const { type } = require('os');
const { Agent } = require('http');

//body parser
server.use(cors());
server.use(express.json())
server.use(morgan('default'))
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)


//MVC modal-view-controller


server.listen(process.env.PORT, ()=>{
     console.log("server started");
     
})



    