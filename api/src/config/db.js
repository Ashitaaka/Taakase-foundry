const database = require('mysql2/promise'); //Imports mysql2 package
require("dotenv").config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env; // imports DB infos from .env 

const db = database.createPool({
    host : DB_HOST,
    port : DB_PORT,
    user : DB_USER,
    password : DB_PASSWORD,
    database : DB_NAME,
}) // creating my DB connection pool

db.getConnection()
    .then(() => {
        console.log("Able to reache database");
    })
    .catch((error) => {
        console.warn("WARNING : DB connection failed");
        console.error(error);
    });
    
module.exports = db;