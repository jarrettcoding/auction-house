const router = require('express').Router();
const { Product, User, Category } = require('../models');

router.get('/', (req, res) => {
    Product.findAll({
        attributes: [
            'id',
            'product_name',
            'price',
            'stock',
            'description',
            'image',
            'category_id'
        ],
    })
    .then(dbProductData => {
            // pass a single post
            const products = dbProductData.map(products => products.get({ plain: true }));
            console.log(products)
            res.render('homepage', { products });
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});
module.exports = router;