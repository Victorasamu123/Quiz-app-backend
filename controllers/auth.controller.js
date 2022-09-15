const signup = (req,res)=>{
    res.send({you:[
        {name:"asamu victor",age:19,company:"andela.com"},
        {name:"asamu victor",age:23,company:"google"}
    ]})
}
module.exports={signup};