const User = require("../models/userSchema");

exports.signupHelper = (req, res) => {
  // when i created any user it will saved with user collection
  // so first of all i will check if user is exist or not
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "user already registered!",
      });

    const { firstName, lastName, email, password } = req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      userName: Math.random().toString(),
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "something went wrong",
        });
      }

      if (data) {
        return res.status(200).json({
          message: "User created successfully!",
        });
      }
    });
  });
};
