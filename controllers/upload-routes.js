// const router = require("express").Router();
// const sequelize = require("../config/connection");
// const { Category, Product, User } = require("../models");
// const multer = require("multer");
// const path = require("path");
// const exphbs = require("express-handlebars");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./imags/");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(
//       null,
//       file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });

// router.get("/", (req, res) => {
//   Product.findAll({
//     attributes: [
//       "id",
//       "product_name",
//       "price",
//       "stock",
//       "description",
//       "image",
//       "category_id",
//     ],
//   })
//     .then((dbProductData) => {
//       // pass a single post
//       const products = dbProductData.map((products) =>
//         products.get({ plain: true })
//       );
//       console.log("upload");
//       res.render("dashboard", { products, loggedIn: true });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post("/uploads", upload.single("image"), (req, res) => {
//   console.log("uploaded", req.file.path);
//   res.sendStatus(200);
// });

// module.exports = router;
