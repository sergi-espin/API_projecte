const express = require("express");
const router = express.Router();
const fabricanteController = require("../controllers/fabricante.controller");
// Retrieve all fabricantes
router.get("/", fabricanteController.findAll);
// Create a new fabricante
router.post("/", fabricanteController.create);
// Retrieve a single fabricante with id
router.get("/:id", fabricanteController.findById);
// Update a fabricante with id
router.put("/:id", fabricanteController.update);
// Delete a fabricante with id
router.delete("/:id", fabricanteController.delete);
module.exports = router;
