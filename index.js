// console.log("hello MERN World");
// import { diff, sum } from "./lib.js";
const lib=require("./lib.js")
const express=require('express')
console.log("hello express");

const server=express()
server.listen(8080)

// const fs =require('fs')

// const t1=performance.now()

// const txt=fs.readFileSync('demo.txt', 'utf-8')
//      console.log(txt);

// fs.readFile('demo.txt', 'utf-8',(err,txt)=>{
//      console.log(txt);

// })


// console.log(lib.sum(3,5), lib.diff(4,7));
// const t2=performance.now()
// console.log(t2-t1);


// sum(4,6);


// let a=45;

