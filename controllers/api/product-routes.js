const router = require("express").Router();
const req = require("express/lib/request");
const { Product, Category, User } = require("../../models");
const { sequelize } = require("../../models/Product");
const withAuth = require("../../utils/auth");
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

const fileFilter = (req, file ,cb) => {
	if(file.mimetype === 'image/jpeg' || file.mometype === 'image/png') {
		cb(null,true)
	} else {
		cb(null, false)
	}
};

const upload = multer({ 
	storage: storage,
	fileFilter
 });

// GET /api/products
router.get("/", (req, res) => {
	// Access our User model and run .findAll() method)
	Product.findAll({
		attributes: [
			"id",
			"product_name",
			"description",
			"stock",
			"price",
			"image",
		],
		include: [
			{
				model: Category,
			},
		],
	})
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
			res.json(dbProductData)
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});



// POST /api/products
router.post("/", upload.single('image'), (req, res) => {
	console.log(req.file);
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
	})
	.catch((err) => {
		console.log(err);
		res.status(500).json(err);
});
});
// PUT /api/products/:id
router.put("/:id", (req, res) => {
	Product.update(req.body, {
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
