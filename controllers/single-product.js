const router = require('express').Router();
const { Product, User, Category } = require('../models');
const { sequelize } = require('../models/Category');
router.get('/:id',(req,res) => {
    Product.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'image',
            'product_name',
            'description',
            'price',
            'stock',
            'seller_id',
        ], 
        include: [
            {
            model :Category,
            attributes:['id','category_name', 'event_time']
            }
        ],
    })
    .then (productData => {
        if (!productData) {
            res.status(404).json({ message: ' The product is not available anymore 😔 '})
            return;
        }
        const product = productData.get({ plain: true });
        console.log(product)
        res.render('single-product',{ product })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
module.exports = router;