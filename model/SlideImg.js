const mongoose = require("mongoose");

const slideimgModel = new mongoose.Schema({
      slideImg:{
          type: String
      },
      cag:{
          type:String
      }
})

module.exports = mongoose.model("slideImg", slideimgModel);