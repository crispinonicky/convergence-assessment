const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const nameSchema = new Schema(
  {
    first: String,
    last: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Name", nameSchema);
