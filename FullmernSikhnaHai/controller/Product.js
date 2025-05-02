const fs=require('fs');
const { json } = require('stream/consumers');
const model=require('../model/product')
const product=model.product

exports.createproduct=async(req, res)=>{
    const Product=new product(req.body)

    await Product.save();
    console.log(Product);
    
 res.status(201).json(Product)
 }

exports.getAllproducts=async(req, res)=>{
     const Produtt=await product.find()
     res.json(Produtt)
    }
 
exports.getproduct=(req, res)=>{
     const id=+req.params.id
     const product=products.find(p=>p.id===id)
     
     res.json(product)
    }
exports.replaceproduct=(req, res)=>{
     const id=+req.params.id
     const productindex=products.findIndex(p=>p.id===id)
     products.splice(productindex,1,{...req.body,id:id})
     res.status(201).json()
    }
    exports.updateproduct=(req, res)=>{
     const id=+req.params.id
     const productindex=products.findIndex(p=>p.id===id)
     const product=products[productindex]
     products.splice(productindex,1,{...product,...req.body})
     res.status(201).json()
    }
    exports.deleteproducts=(req, res)=>{
     const id=+req.params.id
     const productindex=products.findIndex(p=>p.id===id)
     const product=products[productindex]
     products.splice(productindex,1)
     res.status(201).json(product)
    }