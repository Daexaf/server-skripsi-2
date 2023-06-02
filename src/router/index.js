// Import express and router
const express = require("express");
const router = express.Router();

// Import route
const categoryRouter = require("./categoryRoute");
const keranjangRouter = require("./keranjangRoute");
// Use route
router.use("/categories", categoryRouter);
router.use("/keranjang", keranjangRouter);

// Export router
module.exports = router;
