// Import express and router
const express = require("express");
const router = express.Router();
// Import controller functions
const categoryController = require("../controller/categoryController");
// Routes
router.get("/", categoryController.getAllCategory);
router.get("/:id", categoryController.getDetailCategory);
router.post("/", categoryController.addCategory);
router.put("/:id", categoryController.editCategory);
router.delete("/:id", categoryController.deleteCategory);
// Export
module.exports = router;
