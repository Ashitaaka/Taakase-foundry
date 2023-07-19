const { Router } = require("express");
const { UserController } = require("../controllers");

const userRouter = Router();

//GET ALL
userRouter.get("", (req, res, next) =>
  new UserController(req, res, next).getAll()
);

//GET BY ID
userRouter.get("/:id", (req, res, next) =>
  new UserController(req, res, next).getById()
);

module.exports = userRouter;
