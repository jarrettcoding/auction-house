const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");

router.get("/", (req, res) => {
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
        attributes:['event_time']
      }
    ]
  })
    .then((dbProductData) => {
      // pass a single post
      var today = new Date();
      var date = today.getFullYear()+"-"+(today.getMonth()+1)+'-'+today.getDate();
      console.log(date);
      if(dbProductData.event_time !== date){
        alert('no product for today')
      }else{
      const products = dbProductData.map((products) =>
        products.get({ plain: true })
      );
      res.render("dashboard", { products, loggedIn: true });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
