const express=require('express');
const  productController = require('../controller/product.js');
// const Product = require('../model/product');
const router=express.Router();


router
.post('/',productController.createPRODUCTS )
.get('/',productController. getAllProducts)
.get('/:id',productController. getProduct )
.put('/:id',productController. replaceProduct)
.patch('/:id',productController. updateProduct)
.delete('/:id',productController. deleteProduct)

exports.router=router;