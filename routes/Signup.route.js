const express = require("express");
const signupRouter = express.Router()
const { signup, signuppost } = require("../controllers/auth.controller");

signupRouter.get("/signup",signup)
signupRouter.post("/signup",signuppost)
module.exports= signupRouter;