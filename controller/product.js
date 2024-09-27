const fs=require('fs');
const model = require('../model/product');
// const Product = require('../model/product')
// const { model } = require('mongoose');
const Product=model.product;
// const index=fs.readFileSync('index.html', 'utf-8')
// const data=JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products=data.products;

exports.createPRODUCTS =async (req, res) => {
  const product = new Product(req.body)
  try {
 const result=await product.save()
 res.status(201).json(result)
    
  } catch (error) {
 res.status(400).json(error)
    
  }
//  console.log(result);

};

exports. getAllProducts=(req, res)=>{
     res.json(products)
}


exports. getProduct=(req, res)=>{
     const id= +req.params.id
       const product=products.find(p=>p.id===id)
     res.json(product)
}
exports. replaceProduct=(req, res)=>{
     const id= +req.params.id
       const productindex=products.findIndex(p=>p.id===id)
       products.splice(productindex,1,{...req.body,id:id})

     res.status(201).json()
}

exports. updateProduct=(req, res)=>{
     const id= +req.params.id
       const productindex=products.findIndex(p=>p.id===id)
       const product=products[productindex]
       products.splice(productindex,1,{...product,...req.body})

     res.status(201).json()
}

exports. deleteProduct=(req, res)=>{
     const id= +req.params.id
       const productindex=products.findIndex(p=>p.id===id)
       const product=products[productindex]
       products.splice(productindex,1)

     res.status(201).json(product)
}
