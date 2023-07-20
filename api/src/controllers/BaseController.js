const BaseModel = require("../models/BaseModel"); //import the BaseModel

class BaseController {
  constructor(req, res, next) {
    (this.req = req), (this.res = res), (this.next = next);
  }

  getAll() {
    this.model
      .getAll()
      .then(([results]) => this.res.json(results))
      .catch((error) => {
        console.error(error);
        this.res.status(500).json({ error: "an error occured" });
      });
  }

  getById() {
    this.model
      .getById(this.req.params.id)
      .then(([result]) => {
        if (result.length != 0) {
          this.res.json(result);
        } else {
          this.res.status(404).send("Not found");
        }
      })
      .catch((error) => {
        console.error(error);
        this.res.status(500).json({ error: "an error occured" });
      });
  }

  postItem() {
    this.model
      .postItem(this.req.body)
      .then(([result]) => {
        this.res.status(201).json({ id: result.insertId, ...this.req.body });
      })
      .catch((error) => {
        console.error(error);
        this.res.status(500).json({ error: "an error occured" });
      });
  }
}

module.exports = BaseController;
