const productModel = require("../../model/Product");
const {transformShop} = require("./Common");
module.exports={
    PopularProduct: async(args)=>{
        const result =await productModel.find().limit(4).exec();
        return result;
    },
    MenShopHome: async(args)=>{
         const result = await productModel.find({forMen: true}).limit(6);
         return result;
    },
    MenProduct: async(args)=>{
        const result = await productModel.find({forMen: true});
        return result;
   },
   WomenProduct: async(args)=>{
    const result = await productModel.find({forMen: false});
    return result;
   },
   ProductDetail: async(args)=>{
        const result = await productModel.findById(args.idProduct);
        return result;
   },
    WomenShopHome: async(args)=>{
        const result = await productModel.find({forMen: false}).limit(6);
        return result;
   },
   ViewMoreProductMen: async(args)=>{
        const result = await productModel.find({forMen:true}).limit(6);
        return result;
   },
   ViewMoreProductWomen: async(args)=>{
    const result = await productModel.find({forMen:false}).limit(6);
    return result;
    },
    createProduct: async(args)=>{
        const newProductModel = new productModel({
             name: args.productInput.name,
             price: args.productInput.price,
             img: args.productInput.img,
             cag: args.productInput.cag,
             forMen: args.productInput.forMen
        });
        const result = await newProductModel.save();
        return transformShop(result);
    },
    removeProductItem: async(args)=>{
        const result = await productModel.findOneAndRemove({_id: args.idRemove});
        return result;
    },
    updateProductItem: async(args)=>{
        const result =  await productModel.findOneAndUpdate({_id: args.idUpdate},{ 
                $set: { name: "Black t-shirt"},
                $currentDate: { lastModified: true }
            })
        return result;
    }
}