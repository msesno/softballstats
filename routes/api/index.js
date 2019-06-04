const router = require("express").Router();
const playerRoutes = require("./players");

// player routes
router.use("/players", playerRoutes);

module.exports = router;
