// internal import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// external import
const { notFoundHandler, errorHandler } = require("./middlewars/errorHandler");
const signupRouter = require("./router/signupRouter");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const updateUserRoute = require("./router/updateUserRoute");
const deleteUserRoute = require("./router/deleteUserRoute");

const app = express();
dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

//   request parser
app.use(express.json());

// cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/users", updateUserRoute);
app.use("/remove", deleteUserRoute);

// error handling for 404
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

// app listen
app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
