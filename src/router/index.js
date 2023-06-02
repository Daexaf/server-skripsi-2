// Import express and router
const express = require("express");
const router = express.Router();

// Import route
const categoryRouter = require("./categoryRoute");
// Use route
router.use("/categories", categoryRouter);
// Export router
module.exports = router;
