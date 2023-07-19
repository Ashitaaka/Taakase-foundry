const BaseController = require("./BaseController");
const { FontModel } = require("../models");

class FontController extends BaseController {
  constructor(req, res, next) {
    super(req, res, next);
    this.model = new FontModel();
  }
}

module.exports = FontController;
