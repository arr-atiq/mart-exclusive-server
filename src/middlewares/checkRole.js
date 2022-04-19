exports.adminMiddleware = (req, res, next) => {
  if (req.body.role !== "admin") {
    res.status(400).json({ message: "Access denied!" });
  }
  next();
};

exports.userMiddleware = (req, res, next) => {
  if (req.body.role !== "user") {
    res.status(400).json({ message: "Access denied!" });
  }
  next();
};
