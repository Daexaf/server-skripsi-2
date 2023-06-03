const express = require("express");
const router = express.Router();

const tableController = require("../controller/tableController");

router.get("/", tableController.getAllTable);
router.get("/:id", tableController.getDetailTable);
router.post("/", tableController.addTable);
router.put("/:id", tableController.editTable);
router.delete("/:id", tableController.deleteTable);
// Export
module.exports = router;