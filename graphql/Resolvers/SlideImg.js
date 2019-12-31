const slideModel = require("../../model/SlideImg");

module.exports = {
    SlideImg: async(args)=>{
        const result = slideModel.find();
        return result;
    },
    addSlideImg: async(args)=>{
        const newSlideImg = new slideModel({
             slideImg: args.inputSlide.imgUrl,
             cag: args.inputSlide.cag
        });
        const result = newSlideImg.save();
        return result;
    },
    typeSlideImg: async(args)=>{
        const result = slideModel.find({cag: args.typeImg});
        return result;
    }
}