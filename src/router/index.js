// Import express and router
const express = require("express");
const router = express.Router();

// Import route
const adminRouter = require("./adminRoute");
const categoryRouter = require("./categoryRoute");
const keranjangRouter = require("./keranjangRoute");
const productRouter = require("./productRoute");
const tableRouter = require("./tableRoute");
// Use route
router.use("/categories", categoryRouter);
router.use("/keranjangs", keranjangRouter);
router.use("/product", productRouter);
router.use("/table", tableRouter);
router.use("/admin", adminRouter);

// Export router
module.exports = router;
