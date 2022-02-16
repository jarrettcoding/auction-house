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


module.exports = router;