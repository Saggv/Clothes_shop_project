const mongoose = require("mongoose");

const trendSchema = new mongoose.Schema({
        trendImg:{
            type: String
        }
})

module.exports = mongoose.model("trendModel", trendSchema);