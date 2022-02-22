const router = require("express").Router();
const { Product, Category, User } = require("../../models");
const withAuth = require("../../utils/auth");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// GET /api/products
router.get("/", (req, res) => {
  // Access our User model and run .findAll() method)
  Product.findAll()
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/products/:1d
router.get("/:id", (req, res) => {
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
router.post("/", upload.single("image"), (req, res) => {
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
router.put("/:id", (req, res) => {
  //  expects
  //     product_name:
  //     price:
  //     stock:
  //     description:
  //     image:
  //     category_id:
  //     seller_id:
  //     buyer_id:
  Product.update({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProductData) => res.json(dbProductData))
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
