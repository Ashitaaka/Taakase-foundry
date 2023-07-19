const BaseController = require("./BaseController"); //import the BaseController
const { UserModel } = require("../models"); //import the UserModel

class UserController extends BaseController {
  constructor(req, res, next) {
    super(req, res, next);
    this.model = new UserModel();
  }
}

module.exports = UserController;
