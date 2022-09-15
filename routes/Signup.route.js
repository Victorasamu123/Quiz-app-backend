const express = require("express");
const signupRouter = express.Router()
const { signup } = require("../controllers/auth.controller");

signupRouter.get("/signup",signup)
module.exports= signupRouter;