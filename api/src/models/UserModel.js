const BaseModel = require("./BaseModel"); //import the BaseModel

class UserModel extends BaseModel {
  constructor() {
    super("users");
  }

  getUserByEmail(email) {
    return this.db.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }
}

module.exports = UserModel;
