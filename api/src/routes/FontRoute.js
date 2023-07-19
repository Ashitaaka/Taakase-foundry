const { Router } = require("express");
const { FontController } = require("../controllers");

const fontRouter = Router();

//GET ALL ROUTE
fontRouter.get("", (req, res, next) => {
  new FontController(req, res, next).getAll();
});

//GET BY ID
fontRouter.get("/:id", (req, res, next) => {
  new FontController(req, res, next).getById();
});

module.exports = fontRouter;
