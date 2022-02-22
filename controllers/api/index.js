const router = require('express').Router();

// connected the path to set variable
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');
// tells router to use path from saved the consts above
router.use('/users', userRoutes);

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

module.exports = router;