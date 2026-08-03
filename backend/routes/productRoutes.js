const express = require("express");
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

const { getProducts, createProduct,updateProduct, deleteProduct, 
    getProductByName, getProductByCategory, getLowStockProducts, getDashBoardStats,
     getProductById, getProductsWithPagination, getProductsSortedByPrice,
    getInStockProducts, getOutOfStockProducts} = require("../controllers/productController");

router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/pagination", getProductsWithPagination);
router.get("/products/in-stock",getInStockProducts);
router.get("/products/out-stock", getOutOfStockProducts);
router.get("/products/name/:name", getProductByName);
router.get("/products/category/:category", getProductByCategory);
router.get("/products/low-stock", getLowStockProducts);
router.get("/dashboard", getDashBoardStats);
router.get("/products/:id", getProductById);
router.get("/products/sort/price", getProductsSortedByPrice);
router.post("/products",verifyToken, createProduct);


module.exports = router;