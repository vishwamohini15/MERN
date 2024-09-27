const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
     title: {type:String, required:true},
     description: String,
     category:  {type:String, required:true},
     price: {type: Number, min:[0, 'wrong price'], required:true},
     discountPercentage:{type: Number, min:[0, 'wrong min discount'], max:[50,'wrong max discount']},
     rating: {type: Number, min:[0, 'wrong min rating'], max:[5,'wrong max rating']},
     brand: {type:String, required:true},
     thumbnail: {type:String, required:true},
    images:[String]
   });

   exports.product = mongoose.model('product', productSchema);
//    module.exports = Product;