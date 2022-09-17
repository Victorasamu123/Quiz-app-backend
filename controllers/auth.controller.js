const signup = (req,res)=>{
    res.send({you:[
        {name:"asamu victor",age:19,company:"andela.com"},
        {name:"asamu victor",age:23,company:"google"}
    ]})
}

const signuppost=(req,res)=>{
    console.log(req.body)
    res.send({message:"sucess"})
}
module.exports={signup,signuppost};