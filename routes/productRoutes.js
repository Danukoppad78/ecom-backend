const express = require("express");
const {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.get("/products", getAllProducts);

productRoutes.get("/products/:id", getProductsById);

productRoutes.post("/products", createProduct);

productRoutes.put("/products/:id", updateProduct);

productRoutes.delete("/products/:id", deleteProduct);

module.exports = productRoutes;
