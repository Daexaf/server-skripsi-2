const express = require("express");
const router = express.Router();

const adminController = require("../controller/adminController");

router.get("/", adminController.getAllAdmin);
router.get("/:id", adminController.getDetailAdmin);
router.post("/", adminController.addAdmin);
router.put("/:id", adminController.editAdmin);
router.delete("/:id", adminController.deleteAdmin);
// Export
module.exports = router;
