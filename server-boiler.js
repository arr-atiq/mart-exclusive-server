// internal import
const express = require("express");
const dotenv = require("dotenv");
const app = express();

// external imports
const userRoutes = require("./src/router/user/auth");
const createCategory = require("./src/router/category");
const createProduct = require("./src/router/product");
const addToCart = require("./src/router/cart");

// database connection
const connectDB = require("./src/config/dbConnection");
dotenv.config({ path: "./src/config/config.env" });
connectDB();

app.use(express.json());
// routing setup
app.use("/api", userRoutes);
app.use("/api", createCategory);
app.use("/api", createProduct);
app.use("/api", addToCart);

// app listen
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
