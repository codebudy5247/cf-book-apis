const mongoose = require("mongoose");


const subscribedUSerSchema = new mongoose.Schema(
    {
      userEmailId: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 255
      }
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("UserMail", subscribedUSerSchema);