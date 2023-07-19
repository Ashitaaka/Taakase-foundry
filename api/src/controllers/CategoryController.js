const BaseController = require("./BaseController");
const { CategoryModel } = require("../models");

class CategoryController extends BaseController {
  constructor(req, res, next) {
    super(req, res, next);
    this.model = new CategoryModel();
  }
}

module.exports = CategoryController;
