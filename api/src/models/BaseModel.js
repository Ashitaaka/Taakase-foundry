const { db } = require("../config/index"); //imports db infos

class BaseModel {

  constructor(table) {
    this.table = table;
    this.db = db;
  }

  /**TO GET ALL */
  getAll() {
    return this.db.query(`SELECT * FROM ${this.table}`);
  }

  /** TO GET BY ID */
  getById(id) {
    return this.db.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
  }

  /** TO POST */
  postItem(body) {
    //Get the keys and values from the req.body
    const bodyKeys = Object.keys(body);
    const bodyValues = Object.values(body);

    //Auto generates the SQL request
    const sql1 = `INSERT INTO ${this.table}`;
    let sql2 = "";
    let sql3 = "";

    bodyKeys.forEach((key) => {
      sql2 += `${key},`;
      sql3 += "?,";
    });

    //function to remove last caracter
    const removeLastChar = (string) => (string = string.substring(0, string.length - 1));

    sql2 = removeLastChar(sql2);
    sql3 = removeLastChar(sql3);

    return this.db.query(`${sql1} (${sql2}) VALUES (${sql3})`, bodyValues);
  };

  /** TO UPDATE */
  updateItem(body, id){
     //Get the keys and values from the req.body
     const bodyKeys = Object.keys(body);
     const bodyValues = Object.values(body);
 
     //Auto generates the SQL request
     const sql1 = `INSERT INTO ${this.table} SET`;
     const sql2 = "";
 
     bodyKeys.forEach((key) => {
       sql2 += `${key} = ?,`;
     });
 
     //function to remove last caracter
     const removeLastChar = (string) => (string = string.substring(0, string.length - 1));
 
     sql2 = removeLastChar(sql2);
 
     return this.db.query(`${sql1} ${sql2}`, [...bodyValues, id]);
  };

  deleteItem(id){
    return this.db.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = BaseModel;