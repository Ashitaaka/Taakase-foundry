const BaseModel = require("./BaseModel"); //import the BaseModel

class CategoryModel extends BaseModel{

    constructor(){
        super("categories")
    }

}

module.exports = CategoryModel;