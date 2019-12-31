const express = require("express");
require('dotenv').config();
const path = require('path');
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const isAuth = require("./midleware/isAuth");
const schemaGraphql = require("./graphql/Schema");
const resolversQL = require("./graphql/Resolvers");

const app = express();

app.use(isAuth);
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
