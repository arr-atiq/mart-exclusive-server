// internal import
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// external imports
const signupRouter = require("./router/signupRouter");

const app = express();
app.use(bodyParser.json());

// database connection
const connectDB = require("./config/dbConnection");
dotenv.config({ path: "./config/config.env" });
connectDB();

// routing setup
app.use("/", signupRouter);

// app listen
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
