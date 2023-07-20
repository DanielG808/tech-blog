const router = require("express").Router();
const withAuth = require("../utils/auth");
const BlogPost = require("../models/BlogPost");
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll();

    const posts = blogPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts });
  } catch (error) {
    res.json(error);
  }
});

// Login
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Sign Up
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// Create Post
router.get("/create-post", async (req, res) => {
  res.render("create-post");
});
// Get Profile
router.get("/profile", async (req, res) => {
  res.render("profile");
});

module.exports = router;
