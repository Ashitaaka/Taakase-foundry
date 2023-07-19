const BaseModel = require("./BaseModel"); //import the BaseModel

class UserModel extends BaseModel{

    constructor(){
        super("users")
    }
}

module.exports = UserModel;

