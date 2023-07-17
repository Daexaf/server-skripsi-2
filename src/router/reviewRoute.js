const express = require("express");
const router = express.Router();

const reviewController = require("../controller/reviewController");

router.get("/", reviewController.getAllReview);
router.get("/:id", reviewController.getDetailReview);
router.post("/", reviewController.addReview);
router.put("/:id", reviewController.editReview);
router.delete("/:id", reviewController.deleteReview);
// Export
module.exports = router;
