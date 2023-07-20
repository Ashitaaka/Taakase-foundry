const BaseController = require("./BaseController"); //import the BaseController
const { UserModel } = require("../models"); //import the UserModel

class UserController extends BaseController {
  constructor(req, res, next) {
    super(req, res, next);
    this.model = new UserModel();
  }

  getUserByEmail() {
    this.model.getUserByEmail(this.req.body.email).then(([[user]]) => {
      if(!this.req.body.email || !this.req.body.password){
        this.res.status(400).send("Password or email is missing");
      }else{
        this.req.user = user;
        this.next();
      }
    });
  }
}

module.exports = UserController;
