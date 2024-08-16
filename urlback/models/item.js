import mongoose from "mongoose";
import validator from "validator";

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  urlToImage: {
    type: String,
    required: [true, "The image URL field is Missing"],
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "Missing image URL",
    },
  },
});

module.exports = mongoose.model("item", itemSchema);
