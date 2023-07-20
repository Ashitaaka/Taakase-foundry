const { Router } = require("express");
const { UserController } = require("../controllers");
const {
  verifyExistingUser,
  hashPassword,
  test,
  verifyPassword,
} = require("../middlewares/auth");

const userRouter = Router();

//GET ALL
userRouter.get("", (req, res, next) =>
  new UserController(req, res, next).getAll()
);

//GET BY ID
userRouter.get("/:id", (req, res, next) =>
  new UserController(req, res, next).getById()
);

//POST NEW USER
userRouter.post(
  "/register",
  verifyExistingUser,
  hashPassword,
  (req, res, next) => new UserController(req, res, next).postItem()
);

//POST USER LOGIN
userRouter.post(
  "/login",
  (req, res, next) => new UserController(req, res, next).getUserByEmail(),
  verifyPassword
);

module.exports = userRouter;
