const mongoose = require('mongoose');

module.exports = mongoose.model(
    "Post",
    mongoose.Schema({
        title: { type: String, required: true },
        body: { type: String, required: true }
    })
);

