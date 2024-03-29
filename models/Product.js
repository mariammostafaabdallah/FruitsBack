const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    // required: true,
    min: 0
  },
  imageUrl: {
    type: String,

    default: "http://localhost:5000/default.png"
  },
  
  weight:{
    type:Number,
    
  },
  
})

const Product = mongoose.model('products', productSchema);

module.exports = Product;