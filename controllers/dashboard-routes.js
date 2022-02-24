const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", withAuth, (req, res) => {

  Product.findAll({
    attributes: [
      "id",
      "product_name",
      "price",
      "stock",
      "description",
      "image",
      "category_id",
    ],
    include: [
      {
        model: Category,
        attributes:['category_name','event_time']
      }
    ]
  })
    .then((dbProductData) => {
      // pass a single post
      const products = dbProductData.map((products) =>
        products.get({ plain: true })
      );
      res.render("dashboard", { products, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
