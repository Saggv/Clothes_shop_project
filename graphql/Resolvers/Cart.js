const cartModel = require("../../model/Cart");

module.exports ={
    Cart: async(args)=>{
        const res = await cartModel.find({userCookie: args.userCookie}).populate('productId');
        return res;
    },
    AddToCart: async(args)=>{
        let amount = 1;
        const isExist = await cartModel.find({userCookie:args.inputCart.userCookie, productId: args.inputCart.productId});
        if(isExist.length >0){
            let sl = isExist[0].amount +1;
            const update = await (await cartModel.findOneAndUpdate({_id: isExist[0]._id},{"amount":sl}));
            const data = await cartModel.findById(update._id).populate("productId");
            return data;
        }
    const newCart = new cartModel({
        userCookie: args.inputCart.userCookie,
        productId: args.inputCart.productId,
        amount: amount
    });
    const result = await newCart.save();
    const res = await cartModel.findById(result._id).populate("productId");
    return res;
    },
    ReductionCart: async(args)=>{
        const data = await cartModel.findById(args.productIdss);
        let am = data.amount - 1;
        if(am >1){
            const result = await cartModel.findByIdAndUpdate({_id: args.productIdss},{"amount":am}).populate("productId");
            return result;
        }
        else{
            await cartModel.findByIdAndRemove(args.productIdss);
            const outs = await cartModel.find({userCookie: args.userCookiess}).populate('productId');
            return outs;
        }
    },
    IncreaseCart: async(args)=>{
        const datsa = await cartModel.findById(args.productIds);
        let sa = datsa.amount +1;
        await cartModel.findByIdAndUpdate({_id: args.productIds},{"amount":sa});
        const increData = await cartModel.find({userCookie: args.userCookies}).populate('productId');
        return increData;
    },
    RemoveCartItem: async(args)=>{
        const res = await cartModel.remove({_id: args.cartId, userCookies: args.userCookie});
        return "Delete cart item !!"
    }
}