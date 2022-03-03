const createError = require("http-errors");

// 404 not found handle
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {
  res.json({
    error: "Somthing is wrong!",
  });
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
