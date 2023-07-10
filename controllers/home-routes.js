const { sync } = require("../models/User");
const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("homepage");
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

router.get("/profile", async (req, res) => {
  res.render("profile");
});

module.exports = router;
