/* eslint-disable no-undef */
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
const db = mongoose.connection;
//db.dropDatabase();

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Successful connection!"));
