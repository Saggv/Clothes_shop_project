const express = require("express");
require('dotenv').config();
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const isAuth = require("./midleware/isAuth");
const schemaGraphql = require("./graphql/Schema");
const resolversQL = require("./graphql/Resolvers");

const app = express();

app.use(isAuth);
app.get("/", (req, res, next)=>{
    res.send("helsdfs");
})
app.use("/graphql", graphqlHttp({
    schema: schemaGraphql,
    rootValue: resolversQL,
    graphiql: true
}))
mongoose.connect(process.env.MONGOOSEURL, 
        {useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false })
        .then(data=>{
            console.log("Connect with mongoose success!")
        })
        .catch(err=>{
            console.log("Connect mongoose err!"+err)
        })
app.listen(7000, ()=>{
    console.log("server run on port 7000")
});
