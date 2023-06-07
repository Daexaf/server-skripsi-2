const express = require("express");
const router = express.Router();

const keranjangController = require("../controller/keranjangController");
// Routes
router.get("/", keranjangController.getAllKeranjang);
router.get("/:id", keranjangController.getKeranjangByIdTable);
router.post("/", keranjangController.addKeranjang);
router.put("/:id", keranjangController.editKeranjang);
router.delete("/:id", keranjangController.deleteKeranjang);
router.delete("/", keranjangController.deleteKeranjangQuery);
// Export
module.exports = router;
