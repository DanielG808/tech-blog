const router = require("express").Router();
const {} = require("../models");

// Gets the login page and render it
router.get("/login", async (req, res) => {
  try {
    res.render("login.handlebars");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
