// Import express and router
const express = require("express");
const router = express.Router();

// Import route
const categoryRouter = require("./categoryRoute");
const keranjangRouter = require("./keranjangRoute");
const keranjangProductRelationRouter = require("./keranjangProductRelationRoute");
const productRouter = require("./productRoute");
const tableRouter = require("./tableRoute");
const pesananRouter = require("./pesananRoute");
// Use route
router.use("/categories", categoryRouter);
router.use("/keranjang", keranjangRouter);
router.use("/keranjang-product-relation", keranjangProductRelationRouter);
router.use("/product", productRouter);
router.use("/table", tableRouter);
router.use("/pesanan", pesananRouter);

// Export router
module.exports = router;
