const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
     userCookie:{
         type: String,
         required: true
     },
     productId:{
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'productSchema'
     },
     amount:{
         type: Number,
         required: true
     }
});

module.exports = mongoose.model("cartModel", cartSchema);