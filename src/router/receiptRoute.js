const express = require("express");
const router = express.Router();

const receiptController = require("../controller/receiptController");

router.get("/", receiptController.getAllReceipt);
router.get("/:id", receiptController.getDetailReceipt);
router.post("/", receiptController.addReceipt);
router.put("/:id", receiptController.editReceipt);
router.delete("/:id", receiptController.deleteReceipt);
// Export
module.exports = router;
