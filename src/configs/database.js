const mongoose = require("mongoose");

require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/crud_expressjs`
  );
};
