const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
      userImg:{
          type:String
      },
      showImg:{
          type: String
      }
});

module.exports = mongoose.model("showModel", showSchema);