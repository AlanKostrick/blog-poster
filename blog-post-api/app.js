const express = require('express');
const app = express();
const port = 3000;

require("./src/models/db");

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const postsRouter = require("./src/routes/posts");
app.use("/posts", postsRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;