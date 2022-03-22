// internal import
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// external imports
const userRoutes = require("./src/router/user/auth");

const app = express();
app.use(bodyParser.json());

// database connection
const connectDB = require("./src/config/dbConnection");
dotenv.config({ path: "./src/config/config.env" });
connectDB();

// routing setup
app.use("/api", userRoutes);

// app listen
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
