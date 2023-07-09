const { sync } = require("../models/User");

const router = require("express").Router();
// const {} = require("../models");

router.get("/", async (req, res) => {
  res.render("homepage");
});

// Gets the login page and render it
router.get("/login", async (req, res) => {
  //   try {
  //     res.render("login");
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  res.render("login");
});

router.get("/profile", async (req, res) => {
  res.render("profile");
});

module.exports = router;
