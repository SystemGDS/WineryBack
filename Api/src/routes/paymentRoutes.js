const { Router } = require("express");
const { postPaymentHandler, successPaymentHandler, webhookPaymentHandler,
 pendingPaymentHandler, failurePaymentHandler } = require("../handlers/paymentHandler")
const paymentRouter = Router ()

paymentRouter.post("/payment", postPaymentHandler) 
paymentRouter.get("/success", successPaymentHandler)
paymentRouter.get("/failure", failurePaymentHandler)
paymentRouter.get("/pending", pendingPaymentHandler)
paymentRouter.post("/webhook", webhookPaymentHandler)

module.exports = paymentRouter