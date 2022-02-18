const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

router.get("/", (req, res) => {
  res.render("dashboard", { loggedIn: true });
});

module.exports = router;
