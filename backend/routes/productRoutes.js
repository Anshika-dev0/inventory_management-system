const express = require("express");
const router = express.Router();

const { getProducts, createProduct,updateProduct, deleteProduct, getProductByName } = require("../controllers/productController");

router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/name/:name", getProductByName);

module.exports = router;