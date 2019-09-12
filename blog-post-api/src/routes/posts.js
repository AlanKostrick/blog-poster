const express = require("express");
const router = express.Router();
const Post = require("../models/Post");


router.get('/', (req, res) => {
    Post.find({}, (error, data) => {
        if (error) return res.sendStatus(500).json(error)
        return res.json(data)
    })
})


router.get('/:postId', (req, res) => {
    Post.findById(req.params.postId, (error, data) => {
        if (error) return res.sendStatus(500).json(error)
        return res.json(data)
    })
})


router.post('/', (req, res) => {
    const newPost = new Post(req.body)
    newPost.save((err, post) => { return err ? res.sendStatus(500).json(err) : res.json(post) })
})


router.put('/:postId', (req, res) => {
    Post.findByIdAndUpdate(req.params.postId, { $set: { title: req.body.title, body: req.body.body } }, (error, data) => {
        if (error) return res.sendStatus(500).json(error)
        return res.json(req.body)
    })
})

router.delete('/:postId', (req, res) => {
    Post.findByIdAndRemove(req.params.postId, {}, (error, data) => {
        if (error) return res.sendStatus(500).json(error)
        return res.json(data)
    })
})


module.exports = router;