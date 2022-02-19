const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes.js");

// sets the link to be localhost/api/then routes
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

// Must be at the botton (LEARNED THE HARD WAY)
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
