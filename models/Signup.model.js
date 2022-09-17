const mongoose = require("mongoose");
const signupSchema= mongoose.Schema({
    firsname:{required:true,type:String},
    lastname:{required:true,type:String},
    email:{required:true,type:String,unique:true},
    password:{required:true,type:String}
});

const signUpModel= mongoose.model("signup_collection",signupSchema)