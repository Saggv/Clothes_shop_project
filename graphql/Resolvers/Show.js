const showModel = require("../../model/Show");

module.exports = {
    ShowImg: async()=>{
        const result = await showModel.find();
        return result;
    },
    addShowImg: async(args)=>{
        const newShowModel = new showModel({
             userImg: args.inputShowImg.userImg,
             showImg: args.inputShowImg.showImg
        });
        const result = await newShowModel.save();
        return result;
    }
}