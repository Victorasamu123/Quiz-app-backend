const express = require("express");
const signupRouter = express.Router()
const { signup, signuppost, email, signin } = require("../controllers/auth.controller");

signupRouter.get("/signup",signup)
signupRouter.post("/signup",signuppost)
signupRouter.post("/email",email)
signupRouter.post("/signin",signin)
module.exports= signupRouter;