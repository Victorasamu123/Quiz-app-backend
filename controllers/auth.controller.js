const signUpModel = require("../models/Signup.model")

const signup = (req,res)=>{
    res.send({you:[
        {name:"asamu victor",age:19,company:"andela.com"},
        {name:"asamu victor",age:23,company:"google"}
    ]})
}

const signuppost=(req,res)=>{
    console.log(req.body)
    let form = signUpModel(req.body);
    form.save((err)=>{
        if(err){
            console.log(err)
            res.send({message:"signup not succesful",status:false})
        }else{
            console.log("success")
            res.send({message:"signup successful",status:true})
        }
    })
}
module.exports={signup,signuppost};