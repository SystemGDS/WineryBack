const { Router } = require("express");
const {
  getUsers, userByIdHandler, adminHandler, postUserHandler, putCart, postReview, putOrder, putUser, banHandler, getUserByEmail, putFavorites, getOrders, deleteReviewHandler, getReviewByEmail } = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get("/email/:email", getUserByEmail)
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
userRouter.put("/statusorder", putOrder)

userRouter.get("/review/:userId/:wineId", getReviewByEmail)

module.exports = userRouter;
