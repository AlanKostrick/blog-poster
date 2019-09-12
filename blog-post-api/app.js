const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.dropDatabase();
const port = 3000;

const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Successful connection!'));


const Post = require('./src/models/Post');

const postsRouter = require("./src/routes/posts");
app.use("/posts", postsRouter);




app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;