const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (response) {
      console.log(`Mongo DB Connected: ${response.connection.host}`);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
