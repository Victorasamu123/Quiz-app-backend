const express = require("express");
const signupRouter = express.Router()
const { signup, signuppost, email } = require("../controllers/auth.controller");

signupRouter.get("/signup",signup)
signupRouter.post("/signup",signuppost)
signupRouter.post("/email",email)
module.exports= signupRouter;