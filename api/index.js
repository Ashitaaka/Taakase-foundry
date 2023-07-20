require("dotenv").config(); // imports dotenv
const express = require("express"); //imports express
const { Router } = require("express"); //imports express
const path = require("path"); //loads the built-in 'path' module
const { userRouter, fontRouter, categoryRouter } = require("./src/routes");

const app = express();
const port = process.env.APP_PORT ?? 5002; //defining the backend port

app.use(express.json());//treat body requests in JSON

const APIRouter = Router(); // Creates a new instance of Express Router
app.use("/api", APIRouter); //Every requests coming on '/api' are redirected to APIRouter

const publicPath = path.join(__dirname, "./public"); //Building the 'public' directory by joining the current path to './public'
APIRouter.use("/public", express.static(publicPath)); //Serve the 'public' folder for public resources

APIRouter.use("/users", userRouter); //Ask APIRouter to use userRouter when "/users" in the path
APIRouter.use("/fonts", fontRouter); //Ask APIRouter to use fontRouter when "/fonts" in the path
APIRouter.use("/categories", categoryRouter); //Ask APIRouter to use categoryRouter when "/categories" in the path

app.listen(port, function () {
  console.log(`API is running on port ${port}`);
});
