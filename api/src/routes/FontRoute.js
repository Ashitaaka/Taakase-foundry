const { Router } = require("express");
const { FontController } = require("../controllers");

const { checkIfThereIsFile, renameFile} = require("../middlewares/fontsUpload")

const fontRouter = Router();

//GET ALL ROUTE
fontRouter.get("", (req, res, next) => {
  new FontController(req, res, next).getAll();
});

//GET BY ID
fontRouter.get("/:id", (req, res, next) => {
  new FontController(req, res, next).getById();
});

//POST NEW FONT
fontRouter.post(
  "/newfont",
  checkIfThereIsFile,
  renameFile,
  (req, res, next) => new FontController(req, res, next).postItem()
);
module.exports = fontRouter;
