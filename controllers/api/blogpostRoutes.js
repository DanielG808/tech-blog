const router = require("express").Router();
const BlogPost = require("../../models/BlogPost.js");

// POST create a new user
// POST /api/blogposts
router.post("/", async (req, res) => {
  try {
    const blogpostData = await BlogPost.create(req.body);
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
