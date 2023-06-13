const express = require("express");
const { Router } = require("express");
const winesRouter = require("./winesRouter");
const router = Router();
const userRouter = require("./usersRouter");
const paymentRouter = require("./paymentRoutes");

router.use(express.json());

router.use("/wines", winesRouter);
router.use("/users", userRouter);
router.use("/", paymentRouter);

module.exports = router;
