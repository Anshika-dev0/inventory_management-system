const express = require("express");
const router = express.Router();

const { getProducts, createProduct,updateProduct } = require("../controllers/productController");

router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct
);

module.exports = router;