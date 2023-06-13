const { Router } = require("express");
const { getWines, wineByIdHandler, createWineHandler, deleteLogicHandler, deleteHandler, updateWineHandler} = require("../handlers/winesHandler")
 
const winesRouter = Router();

winesRouter.get("/", getWines)
winesRouter.get("/:id", wineByIdHandler)
winesRouter.post("/", createWineHandler)
winesRouter.patch("/", deleteLogicHandler)
winesRouter.delete("/:id", deleteHandler)
winesRouter.put("/", updateWineHandler)

module.exports = winesRouter;