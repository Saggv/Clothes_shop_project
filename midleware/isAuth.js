const jwt = require("jsonwebtoken");

module.exports = (req,res, next)=>{
     const authHear = req.get('Authorization');
     if(!authHear){
         req.isAuth = false;
         return next();
     }
     const token = authHear;
     if(!token || token ===""){
         req.isAuth = false;
         return next();
     }
     let decode;
     try{
         decode = jwt.verify(token, "jsonwebtoken");
     }catch(err){
          req.isAuth = false;
          return next()
     }
     if(!decode){
         req.isAuth = false;
         return next();
     }
     req.isAuth = true;
     req.userID = decode.userId;
     next();
}