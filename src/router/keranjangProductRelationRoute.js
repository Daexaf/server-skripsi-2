const express = require("express");
const router = express.Router();

const keranjangProductRelationController = require("../controller/keranjangProductRelationController");
// Routes
router.get("/", keranjangProductRelationController.getAllKeranjangProductRelation);
router.get("/:id", keranjangProductRelationController.getDetailKeranjangProductRelation);
router.post("/", keranjangProductRelationController.addKeranjangProductRelation);
router.put("/:id", keranjangProductRelationController.editKeranjangProductRelation);
router.delete("/:id", keranjangProductRelationController.deleteKeranjangProductRealtion);
// Export
module.exports = router;
