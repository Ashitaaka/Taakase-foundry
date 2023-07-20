const { db } = require("../config");
const argon2 = require("argon2");

const verifyExistingUser = (req, res, next) => {
  const { email } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email])
    .then(([[user]]) => {
      if (user) {
        res.status(409).send("Email déjà utilisé");
      } else {
        next();
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "an error occured" });
    });
};

const hashPassword = async (req, res, next) => {
  const { password } = req.body; //getting the original password

  //hashing options for Argon2
  const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  try {
    //Hashing the password with Argon2
    const hashedpassword = await argon2.hash(password, hashingOptions);
    //adding "hashedpassword" in the req.body
    req.body.hashedpassword = hashedpassword;
    //delete original password from the req.body
    delete req.body.password;
    next();
  } catch (error) {
    console.error("error hashing password", error);
    res.status(500).send("error hashing password");
  }
};

const verifyPassword = async (req, res, next) => {
  const { password } = req.body;
  const { hashedpassword } = req.user;

  try {
    const isPasswordValid = await argon2.verify(hashedpassword, password);

    if (!isPasswordValid) {
      res.status(404).send("Wrong password");
    } else {
      delete req.user.hashedpassword;
      res.status(200).json({...req.user})
    }
  } catch (error) {
    console.error("error verifying password", error);
    res.status(500).send("error verifying password");
  }
};

module.exports = {
  verifyExistingUser,
  hashPassword,
  verifyPassword,
};
