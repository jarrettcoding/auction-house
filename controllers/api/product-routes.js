const router = require('express').Router();
const { Product, Category } = require('../../models');

// GET /api/products
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    Product.findAll()
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

// GET /api/products/:1d
router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No user found with this id!'});
            return;
        }
        res.json(dbProductData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/products
router.post('/', (req, res) => {
    Product.create({
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
        image: req.body.image,
        category_id: req.body.category_id,
        seller_id: req.body.seller_id,
        buyer_id: req.body.buyer_id
        })

    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        consoole.log(err);
        res.status(500).json(err);
    });
    });


module.exports = router;