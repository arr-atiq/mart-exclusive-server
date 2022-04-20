// internal import
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");

// external imports
const userAuthRoutes = require("./src/router/authUser");
const adminAuthRoutes = require("./src/router/authAdmin");
const createCategory = require("./src/router/category");
const createProduct = require("./src/router/product");
const addToCart = require("./src/router/cart");

// database connection
const connectDB = require("./src/config/dbConnection");
dotenv.config({ path: "./src/config/config.env" });
connectDB();

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
// routing setup
app.use("/mart-exclusive", userAuthRoutes);
app.use("/mart-exclusive", adminAuthRoutes);
app.use("/mart-exclusive", createCategory);
app.use("/mart-exclusive", createProduct);
app.use("/mart-exclusive", addToCart);

// app listen
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
