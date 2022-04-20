const Admin = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signupHelper = async (req, res) => {
  // when i created any admin it will saved with admin collection
  // so first of all i will check if admin is exist or not
  try {
    const adminData = await Admin.findOne({ email: req.body.email });
    if (adminData) {
      return res.status(400).json({
        message: "Admin already registered!",
      });
    } else {
      const { firstName, lastName, email, password } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _adminSignUpData = new Admin({
        firstName,
        lastName,
        email,
        password: hash_password,
        userName: Math.random().toString(),
        role: "admin",
      });

      _adminSignUpData.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Signup faild!",
          });
        }

        if (data) {
          return res.status(200).json({
            message: "Admin created successfully!",
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
    const foundAdmin = await Admin.find({ email: req.body.email });

    // password validate when admin have found
    if (foundAdmin && foundAdmin.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        foundAdmin[0].password
      );
      if (isValidPassword) {
        // now we will generate toke because password was valid
        // when we will use jwt first argument will be which data i will give in this token,second argument will be secrat key
        const token = jwt.sign(
          {
            id: foundAdmin[0]._id,
            role: foundAdmin[0].role,
          },
          process.env.COOKIE_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          access_token: token,
          message: "Login successful!",
          role: foundAdmin[0].role,
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
