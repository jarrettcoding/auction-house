const router = require("express").Router();
const { Product, User, Category } = require("../models");
const withAuth = require("../utils/auth");
var today = new Date();
var date = today.getFullYear()+"-"+(today.getMonth()+1)+'-'+today.getDate();
console.log(date);

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
  })
    .then((dbProductData) => {
      // pass a single post
      const products = dbProductData.map((products) =>
        products.get({ plain: true })
      );
      res.render("homepage", { products, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});
router.get("/logout", (req, res) => {
  if (!req.session.loggedIn)
  res.redirect("/");
  return;
})
router.get("/profile", (req, res) => {
  if(req.session.loggedIn) {
    res.render("/");
    return;
  }
  res.render("profile")
})


router.get("/", withAuth, (req ,res) => {
  User.findAll({
      where: {
          id: req.session.id
      },
  })
  .then(dbUserData => {
      const user = dbUserData.map(user => user.get({ plain: true }));
      res.render('profile', {
          user,
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

module.exports = router;
