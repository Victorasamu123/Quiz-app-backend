const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
const PORT = process.env.PORT
const URI= process.env.URI
mongoose.connect(URI,(err)=>{
    if(err){
        console.log("there is an error in connecting")
    }else{
        console.log("mongoose has connected successfully")
    }
})
app.use(express.urlencoded({extended:true}));
const signupRouter = require("../vihat backend/routes/Signup.route");
app.use("/auth",signupRouter);
app.listen(PORT,()=>{
    console.log("app listening at port 2500");
});
