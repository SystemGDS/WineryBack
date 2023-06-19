const { Router } = require("express");
const {
  getUsers, userByIdHandler, adminHandler, postUserHandler, putCart, postReview, putUser, banHandler, getUserByEmail, putFavorites, getOrders, deleteReviewHandler } = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get("/email", getUserByEmail)
userRouter.get("/orders", getOrders)
userRouter.get("/", getUsers);
userRouter.get("/:id", userByIdHandler);
userRouter.post("/", postUserHandler);
userRouter.put("/cart", putCart);
userRouter.post("/review",postReview )
userRouter.put("/", putUser)
userRouter.put("/ban", banHandler)
userRouter.put("/isadmin", adminHandler)
userRouter.put("/favorites", putFavorites)
userRouter.delete("/review", deleteReviewHandler)


module.exports = userRouter;
