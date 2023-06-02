const express = require("express");
const router = express.Router();

const keranjangController = require("../controller/keranjangController");
// Routes
router.get("/", keranjangController.getAllKeranjang);
router.get("/:id", keranjangController.getDetailkeranjang);
// router.post("/", keranjangController.addkeranjang);
// router.put("/:id", keranjangController.editkeranjang);
// router.delete("/:id", keranjangController.deletekeranjang);
// Export
module.exports = router;
