const express = require("express");
const router = express.Router();

const { getProducts, createProduct,updateProduct, deleteProduct, 
    getProductByName, getProductByCategory, getLowStockProducts, getDashBoardStats,
     getProductById, getProductsWithPagination, getProductsSortedByPrice} = require("../controllers/productController");

router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/pagination", getProductsWithPagination);
router.get("/products/name/:name", getProductByName);
router.get("/products/category/:category", getProductByCategory);
router.get("/products/low-stock", getLowStockProducts);
router.get("/dashboard", getDashBoardStats);
router.get("/products/:id", getProductById);
router.get("/products/sort/price", getProductsSortedByPrice);


module.exports = router;