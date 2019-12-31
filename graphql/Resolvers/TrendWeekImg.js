const TrendWeeKModel = require("../../model/TrendModel");

module.exports ={
    TrendWeekImg: async(args)=>{
        const result = await TrendWeeKModel.find();
        return result;
    },
    addTrendWeekImg: async(args)=>{
        const newImgTrend = new TrendWeeKModel({
             trendImg: args.imgUrl
        });
        const result = await newImgTrend.save();
        return result;
    },
    removeTrendWeekImg: async(args)=>{
        const result = await TrendWeeKModel.findOneAndRemove({_id: args.idRemove});
        console.log(result);
        return result;
    }
}