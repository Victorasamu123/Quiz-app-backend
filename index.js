const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT
app.use(express.urlencoded({extended:true}));
const signupRouter = require("../vihat backend/routes/Signup.route");
app.use("/auth",signupRouter);
app.listen(PORT,()=>{
    console.log("app listening at port 2500");
});
