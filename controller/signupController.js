const { default: mongoose } = require("mongoose");
const UserSchema = require("../schemas/userSchema");

// creating model
const User = new mongoose.model("User", UserSchema);

const signupController = async (req, res) => {
  const signupValue = new User(req.body);
  signupValue.save((err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "User Added Successfully",
        signupData: data,
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  signupController,
};
