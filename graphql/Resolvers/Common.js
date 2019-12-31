 const userModel = require("../../model/User");
 const productModel = require("../../model/Product");
 const bookingModel = require("../../model/Booking");
 
 const transformShop = shop =>{
    return{
        ...shop._doc,
        id: shop.id
    }
};

const transformBooking = booking =>{
     return{
         ...booking._doc,
         id: booking.id,
         user: user(booking.user),
         products: products(booking.productsId),
         amount: booking.amount,
         dataBook: booking.dataBook
     }
}
const products = async(productId)=>{
    const result = await productModel.findById(productId);
    return{
        ...result._doc,
        id: result.id,
        name: result.name,
        price: result.price,
        img: result.img,
        cag: result.cag,
        forMen: result.forMen
    }
}

const user = async(useId)=>{
     const result = await userModel.findById(useId);
     return{
         ...result._doc,
         id: result.id,
         name: result.name,
         useName: result.useName,
         password: result.password
     }
}

exports.transformShop = transformShop;
exports.transformBooking = transformBooking;