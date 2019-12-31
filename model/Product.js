const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    cag:{
        type: String,
        required: true
    },
    forMen:{
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("productSchema", productSchema);