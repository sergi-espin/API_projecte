const express = require("express");
const router = express.Router();
const opinionController = require("../controllers/opinion.controller");
// Retrieve all opiniones
router.get("/", opinionController.findAll);
// Create a new opinion
router.post("/", opinionController.create);
// Retrieve a single opinion with id
router.get("/:id", opinionController.findById);
// Update a opinion with id
router.put("/:id", opinionController.update);
// Delete a opinion with id
router.delete("/:id", opinionController.delete);
module.exports = router;
