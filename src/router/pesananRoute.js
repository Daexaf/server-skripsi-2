const express = require("express");
const router = express.Router();

const pesananController = require("../controller/pesananController");

router.get("/", pesananController.getAllPesanan);
// router.get("/:id", tableController.getDetailTable);
// router.post("/", tableController.addTable);
// router.put("/:id", tableController.editTable);
// router.delete("/:id", tableController.deleteTable);
// // Export
module.exports = router;
