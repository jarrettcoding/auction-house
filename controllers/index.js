const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const singleProduct = require('./single-product');
const dashboardRoutes = require("./dashboard-routes.js");
const profileRoutes = require("./profile-routes");

// sets the link to be localhost/api/then routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/product',singleProduct)
router.use('/profie', profileRoutes);
router.use("/dashboard", dashboardRoutes);
// router.use('/search', searchRoutes)
// Must be at the botton (LEARNED THE HARD WAY)
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
