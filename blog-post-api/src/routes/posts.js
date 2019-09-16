/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  Post.find({}, (error, data) => {
    if (error) return res.sendStatus(500).json(error);
    return res.json(data);
  });
});

router.get("/:postId", (req, res) => {
  Post.findById(req.params.postId, (error, data) => {
    if (error) return res.sendStatus(500).json(error);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  const newPost = new Post(req.body);
  newPost.save((err, post) => {
    return err ? res.sendStatus(500).json(err) : res.json(post);
  });
});

router.put("/:postId", (req, res) => {
  Post.findByIdAndUpdate(
    req.params.postId,
    { $set: { title: req.body.title, content: req.body.content } },
    error => {
      if (error) return res.sendStatus(500).json(error);
      return res.json(req.body);
    }
  );
});

// router.delete('/:postId', (req, res) => {
//     Post.findByIdAndRemove(req.params.postId, {}, (error, data) => {
//         if (error) return res.sendStatus(500).json(error)
//         return res.json(data)
//     })
// })

//if you want to return the remaining collection
router.delete("/:postId", (req, res) => {
  Post.findByIdAndRemove(req.params.postId, {}, error => {
    if (error) res.sendStatus(500).json(error);
    Post.find().then(response => res.json(response));
  });
});

module.exports = router;
