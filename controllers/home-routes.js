const router = require('express').Router();
const { Product } = require('../models');

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
    .then(dbPostData => {
        // pass a single post object into the homepage template
        const product = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { 
          product,
         loggedIn: req.session.loggedIn 
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;