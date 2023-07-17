// Import express and router
const express = require("express");
const router = express.Router();

// Import route
const adminRouter = require("./adminRoute");
const categoryRouter = require("./categoryRoute");
const keranjangRouter = require("./keranjangRoute");
const productRouter = require("./productRoute");
const tableRouter = require("./tableRoute");
const receiptRouter = require("./receiptRoute");
const reviewRouter = require("./reviewRoute");

// Use route
router.use("/categories", categoryRouter);
router.use("/keranjangs", keranjangRouter);
router.use("/product", productRouter);
router.use("/table", tableRouter);
router.use("/admin", adminRouter);
router.use("/receipt", receiptRouter);
router.use("/review", reviewRouter);

// Export router
module.exports = router;
