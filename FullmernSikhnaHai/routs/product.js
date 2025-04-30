const express=require('express');
const productController=require('../controller/Product')
const router=express.Router();


router
.post('/products', productController.createproduct)
.get('/products', productController.getAllproducts)
.get('/products/:id', productController.getproduct)
.put('/products/:id', productController.replaceproduct)
.patch('/products/:id', productController.updateproduct)
  .delete('/products/:id', productController.deleteproducts)

  exports.router=router