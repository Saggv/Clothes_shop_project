const bookingModel = require("../../model/Booking");
const cartModel = require("../../model/Cart");
const {transformBooking} = require("./Common");

module.exports ={
     getBooking: async(args, req)=>{
          if(!req.isAuth){
               throw new Error("Unauthenticated !!!");
          }
          const dataBooking = await bookingModel.find({user:req.userID}).populate('productsId').populate("user");
          return dataBooking;
     },
    bookingProduct: async(args)=>{
         const newBooking = new bookingModel({
              user: args.inputBooking.userId,
              productsId: args.inputBooking.productsId,
              amount: args.inputBooking.amount
         });
         const result = await newBooking.save();
         return transformBooking(result);
    },
    cancelBookingProduct: async(args, req)=>{
          if(!req.isAuth){
               throw new Error("Unauthenticated!!!")
          }
          try{
              const result = await bookingModel.findByIdAndDelete(args.idBooking);
              let isDele = "Cancel booking success !!!"
              if(!result){
                    isDele = "Cancel booking error !!!"
              }
               return isDele;
          }catch(err){
               throw err;
          }
    },
    BookingMany: async(args)=>{
          const rest = await bookingModel.insertMany(args.data);
          return "inser";
    },
    CartToBooking: async(args, req)=>{
         if(!req.isAuth){
               throw new Error("unauthenticated !!!");
         }
          const cart = await cartModel.find({userCookie: args.userCookie});
          let convertBooking = cart.map((item, index)=>{
                 let tem={};
                 tem.user =req.userID,
                 tem.productsId = item.productId,
                 tem.amount = item.amount;
                 return tem;
          });
          await bookingModel.insertMany(convertBooking);
          await cartModel.remove({userCookie:args.userCookie});
          return "Booking success!!!"
    }
}