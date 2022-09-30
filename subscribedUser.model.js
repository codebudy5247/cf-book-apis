const mongoose = require("mongoose");


const subscribedUSerSchema = new mongoose.Schema(
    {
      userEmailId: String,
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("UserMail", subscribedUSerSchema);