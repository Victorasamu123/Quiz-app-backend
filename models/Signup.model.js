const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const signupSchema= mongoose.Schema({
    firstname:{required:true,type:String},
    lastname:{required:true,type:String},
    email:{required:true,type:String,unique:true},
    password:{required:true,type:String}
});

let saltRound = 10;
signupSchema.pre("save",function(next){
    console.log(this.password)
    bcrypt.hash(this.password,saltRound,(err,hashedPassword)=>{
        if(!err){
            console.log(hashedPassword)
            this.password=hashedPassword
            next()
        }
    })
})
signupSchema.methods.validatePassword = function(password,callback){
    bcrypt.compare(password,this.password,(err,same)=>{
        console.log(same)
        if(!err){
            callback(err,same)
        }else{
            next()
        }
    })
}
const signUpModel= mongoose.model("signup_collection",signupSchema);
module.exports=signUpModel;