const fs=require('fs');
const { json } = require('stream/consumers');
// const index=fs.readFileSync('index.html', 'utf-8')
const data=JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products=data.products;


exports.createproduct=(req, res)=>{
     console.log(req.body);
     products.push(req.body)
 res.status(201).json(req.body)
 }
exports.getAllproducts=(req, res)=>{
     res.json(products)
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