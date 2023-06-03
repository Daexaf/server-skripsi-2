const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getDetailProduct);
router.post("/", productController.addProduct);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);
// Export
module.exports = router;
