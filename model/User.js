const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     name:{
         type: String,
         required:true
     },
     userName:{
         type: String,
         required: true
     },
     password:{
         type: String,
         required: true
     },
     avatar:{
         type:String
     },
     address:{
         type: String,
     },
     job:{
         type: String
     },
     email:{
         type: String
     }
});

module.exports = mongoose.model("userModel", userSchema);