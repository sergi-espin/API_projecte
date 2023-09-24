const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoria.controller");
// Retrieve all categorias
router.get("/", categoriaController.findAll);
// Create a new categoria
router.post("/", categoriaController.create);
// Retrieve a single categoria with id
router.get("/:id", categoriaController.findById);
// Update a categoria with id
router.put("/:id", categoriaController.update);
// Delete a categoria with id
router.delete("/:id", categoriaController.delete);
module.exports = router;
