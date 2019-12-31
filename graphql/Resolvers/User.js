const userModel = require("../../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
module.exports ={
    signup: async(args)=>{
            try{
                const isExistUser = await userModel.findOne({userName: args.inputSignup.userName});
                if(isExistUser){
                   throw new Error("User already exist !!");
                }
                const hashPassword = await bcrypt.hash(args.inputSignup.password, 12);
                const newUser = new userModel({
                     name: args.inputSignup.name,
                     userName: args.inputSignup.userName,
                     password: hashPassword,
                     email:"example@gmail.com",
                     address:"SON TAY-HA NOI-VIET NAM",
                     job:"Web deverloper",
                     avatar:"http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
                });
                const result = await newUser.save();
                if(!result){
                    throw new Error("Error please fill agian !");
                }
                const token = await jwt.sign({userId: result._id, userName: result.userName}, "jsonwebtoken");
                return{
                    userId: result._id,
                    token: token,
                    userName: result.userName,
                    name: result.name,
                    avatar: result.avatar,
                    address: result.address,
                    email: result.email,
                    job: result.job
                }
            }catch(err){
                    throw err;
            }
    },
    Login: async(args)=>{
        const exist = await userModel.findOne({userName: args.userName});
        if(!exist){
            throw new Error("User doesn't exist !!");
        }
        const isMatch = await bcrypt.compare(args.password, exist.password);
        if(!isMatch){
            throw new Error("Password isn't correct !!!")
        }
        const token = await jwt.sign({userId: exist._id, userName: exist.userName}, "jsonwebtoken")
        return{
            userId: exist._id,
            name: exist.name,
            userName: exist.userName,
            token: token,
            avatar: exist.avatar,
            job: exist.job,
            email: exist.email,
            address: exist.address
        }
    },
    getProfile: async(args, req)=>{
        if(!req.isAuth){
            throw new Error("Unauthenticated !!!");
        }
        const result = await userModel.findById(req.userID);
        return result;
    }
}