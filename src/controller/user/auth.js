const User = require("../../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signupHelper = async (req, res) => {
  // when i created any user it will saved with user collection
  // so first of all i will check if user is exist or not
  try {
    const userData = await User.findOne({ email: req.body.email });
    if (userData) {
      return res.status(400).json({
        message: "user already registered!",
      });
    } else {
      const { firstName, lastName, email, password } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _userSignUpData = new User({
        firstName,
        lastName,
        email,
        password: hash_password,
        userName: Math.random().toString(),
        role: "admin",
      });

      _userSignUpData.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Signup faild!",
          });
        }

        if (data) {
          return res.status(200).json({
            message: "User created successfully!",
          });
        }
      });
    }
  } catch {
    res.status(400).json({ message: "Something was wrong!" });
  }
};

exports.signinHelper = async (req, res) => {
  try {
    const foundUser = await User.find({ email: req.body.email });

    // password validate when user have found
    if (foundUser && foundUser.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        foundUser[0].password
      );
      if (isValidPassword) {
        // now we will generate toke because password was valid
        // when we will use jwt first argument will be which data i will give in this token,second argument will be secrat key
        const token = jwt.sign(
          {
            id: foundUser[0]._id,
            role: foundUser[0].role,
          },
          process.env.COOKIE_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          access_token: token,
          message: "Login successful!",
          role: foundUser[0].role,
        });
      }
    } else {
      res.status(400).json({
        message: "Email does not exists!",
      });
    }
  } catch {
    res.status(400).json({
      message: "Something went wrong!",
    });
  }
};
