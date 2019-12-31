const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userModel'
        },
        productsId:{
             type: mongoose.Schema.Types.ObjectId,
             ref: 'productSchema'
        },
        amount:{
            type:Number,
        },
        dateBook:{
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model("bookingModel", bookingSchema);