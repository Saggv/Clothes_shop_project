const express = require("express");
require('dotenv').config();
const multer = require("multer");
const bodyParser = require("body-parser");

const userModel = require("./model/User");

const path = require('path');
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const isAuth = require("./midleware/isAuth");
const schemaGraphql = require("./graphql/Schema");
const resolversQL = require("./graphql/Resolvers");

const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) 

const fileStorage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "image");
    },
    filename:(req, file, cb)=>{
        cb(null, "image-"+file.originalname);
    }
})
app.use("/image", express.static("image"));

const  upload = multer({storage:fileStorage});
app.use(isAuth);
app.post("/uploadfile",upload.single("image"),async(req, res)=>{
    let avatarUrl ="/image/"+req.file.filename;
    await userModel.findByIdAndUpdate({_id: req.userID}, {"avatar": avatarUrl});
    res.status(200).json({msg:"success"});
})
app.use("/graphql", graphqlHttp({
    schema: schemaGraphql,
    rootValue: resolversQL,
    graphiql: true
}))

app.get("/", (req, res)=>{
     res.send("heelosddf");
})

mongoose.connect(process.env.MONGOOSEURL, 
        {useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false })
        .then(data=>{
            console.log("Connect with mongoose success!")
        })
        .catch(err=>{
            console.log("Connect mongoose err!"+err)
        })

//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const port = process.env.PORT || 7000;
app.listen(port, ()=>{
    console.log("server run on port 7000")
});
