const fs=require('fs');
const model = require('../model/product');
const mongoose = require('mongoose');

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

exports. getAllProducts=async(req, res)=>{
  const products=await Product.find();
     res.json(products)
}


exports. getProduct=async(req, res)=>{
     const id= req.params.id;
     console.log({id});
     
     const products=await Product.findById(id);

     res.json(products)
}
exports. replaceProduct=async(req, res)=>{
     const id= req.params.id
     try {
    const doc= await Product.findOneAndReplace({_id:id}, req.body, {new:true})
     res.status(201).json(doc)
      
     } catch (error) {
      console.log(error);
      res.status(400).json(error)

     }

}

exports. updateProduct=async(req, res)=>{
     const id= req.params.id
     try {
    const doc= await Product.findOneAndUpdate({_id:id}, req.body, {new:true})
     res.status(201).json(doc)
      
     } catch (error) {
      console.log(error);
      res.status(400).json(error)

     }
}

exports. deleteProduct=async(req, res)=>{
  const id= req.params.id
     try {
    const doc= await Product.findOneAndDelete({_id:id})
     res.status(201).json(doc)
      
     } catch (error) {
      console.log(error);
      res.status(400).json(error)

     }

}
