const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.COOKIE_SECRET);
    const { role, id } = decode;
    req.body.role = role;
    req.id = id;
    next();
  } catch {
    res.status(400).json({ message: "Authentication failed! Access denied" });
  }
};

module.exports = checkLogin;
