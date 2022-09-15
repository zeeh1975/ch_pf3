const { Router } = require("express");
const rutasProductos = Router();
const {
  getProductos,
  getProducto,
  addProducto,
  updateProducto,
  deleteProducto,
} = require("../controllers/productosController");

const { isAdmin } = require("../middleware/session");
const isValidProduct = require("../middleware/productValidation");

// Devuelve la lista de productos
rutasProductos.get("/", getProductos);
// Devuelve el producto indicado por id
rutasProductos.get("/:id", getProducto);
// Agrega un producto (solo administradores)
rutasProductos.post("/", isAdmin, isValidProduct, addProducto);
// Actualiza un producto (solo administradores)
rutasProductos.put("/:id", isAdmin, updateProducto);
// Elimina un producto (solo administradores)
rutasProductos.delete("/:id", isAdmin, deleteProducto);

module.exports = rutasProductos;
