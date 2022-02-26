const router = require("express").Router();
const sequelize = require("../config/connection");
const { Category, Product, User } = require("../models");
const withAuth = require('../utils/auth');

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, "../../public/images"));
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(
			null,
			file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage }).single('image');

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

// POST /api/products
router.post("/uploads", upload, (req, res) => {
	console.log(req.file, req.body);
	Product.create({
		product_name: req.body.product_name,
		price: req.body.price,
		stock: req.body.stock,
		description: req.body.description,
		image: req.file.filename,
		category_id: req.body.category_id,
		seller_id: req.session.user_id,
		buyer_id: req.body.user_id,
	}).then((dbProductData) => {
		if (!dbProductData) {
			res.status(404).json({
				message: "please upload a file",
			});
			return;
		}
		res.json(dbProductData);
	});
});

module.exports = router;
