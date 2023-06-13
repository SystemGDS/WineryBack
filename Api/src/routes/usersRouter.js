const { Router } = require("express");
const {
  getUsers,
  userByIdHandler,
  postUserHandler,
  putCart,
} = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", userByIdHandler);
userRouter.post("/", postUserHandler);
userRouter.put("/cart", putCart);
module.exports = userRouter;
