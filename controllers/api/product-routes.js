const router = require("express").Router();
const req = require("express/lib/request");
const { Product, Category, User } = require("../../models");
const { sequelize } = require("../../models/Product");
const withAuth = require("../../utils/auth");

// GET /api/products
router.get("/",(req, res) => {
  // Access our User model and run .findAll() method)
  Product.findAll({
    attributes:[
      'id',
      "product_name",
      'description',
      'stock',
      'price',
      'image',
    ],
    include: [
      {
        model: Category,
      }
    ]
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/products/:1d
router.get("/:id",(req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Category,
        attributes: ["category_name"],
      },
    ],
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/products
router.post("/", (req, res) => {
  console.log(req.res);
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description,
    image: req.body.image,
    category_id: req.body.category_id,
    seller_id: req.session.user_id,
    buyer_id: req.body.user_id,
  })

    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// PUT /api/products/:id
router.put("/:id", (req,res) => {
  Product.update(req.body,{
    price: req.body.price,
    where: {
      id: req.params.id,
    },
  }
  )
    .then((dbProductData) => {
      if(!dbProductData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// DELETE /api/products/:id
router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
