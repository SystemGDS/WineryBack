const express = require("express");
const { Router } = require("express");
const authRouter = Router ()
const jwt = require("jsonwebtoken")

authRouter.post("/signup")
authRouter.post("/login")
authRouter.get("/protected")


module.exports = authRouter