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

app.get('/', (req, res) => {
    res.send(db_status)
})


app.post('/posts', (req, res) => {
    const newPost = new Post(req.body)
    newPost.save((err, post) => { return err ? res.sendStatus(500).json(err) : res.json(post) })
})


app.get('/posts', (req, res) => {
    Post.find({}, (error, data) => {
        if (error) return res.sendStatus(500).json(error)
        return res.json(data)
    })
})

app.get('/posts/:postId', (req, res) => {
    Post.findById(req.params.postId, (error, data) => {
        if (error) return res.sendStatus(500).json(error)
        return res.json(data)
    })
})

app.put('/posts/:postId', (req, res) => {
    Post.findByIdAndUpdate(req.params.postId, { $set: { title: req.body.title, body: req.body.body } }, (error, data) => {
        if (error) return res.sendStatus(500).json(error)
        return res.json(req.body)
    })
})

app.delete('/posts/:postId', (req, res) => {
    Post.findByIdAndRemove(req.params.postId, {}, (error, data) => {
        if (error) return res.sendStatus(500).json(error)
        return res.json(data)
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;