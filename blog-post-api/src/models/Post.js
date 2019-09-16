/* eslint-disable no-undef */
const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Post",
  mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
  })
);
