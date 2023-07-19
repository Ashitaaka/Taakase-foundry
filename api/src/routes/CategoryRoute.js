const { Router } = require("express");
const { CategoryController } = require("../controllers");

const categoryRouter = Router();

//GET ALL ROUTE
categoryRouter.get("", (req, res, next) => {
  new CategoryController(req, res, next).getAll();
});

//GET BY ID
categoryRouter.get("/:id", (req, res, next) => {
  new CategoryController(req, res, next).getById();
});

module.exports = categoryRouter;
