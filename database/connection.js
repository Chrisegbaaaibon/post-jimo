const mongoose = require("mongoose");

exports.db = async () => {
  try {
   mongoose.connect(process.env.MONGO_URI)
    // console.log('connected sucessfully')
  } catch (error) {
     console.log(error);
  }
};