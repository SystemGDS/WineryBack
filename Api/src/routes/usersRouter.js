const { Router } = require("express");
const {
  getUsers, userByIdHandler, adminHandler, postUserHandler, putCart, postReview, putUser, banHandler, putFavorites } = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", userByIdHandler);
userRouter.post("/", postUserHandler);
userRouter.put("/cart", putCart);
userRouter.post("/review",postReview )
userRouter.put("/", putUser)
userRouter.put("/ban", banHandler)
userRouter.put("/isadmin", adminHandler)
userRouter.put("/favorites", putFavorites)
// userRouter.get("/orders", getOrders)


module.exports = userRouter;
