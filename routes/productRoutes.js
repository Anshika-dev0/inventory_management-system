const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");
const { validationProduct } = require("../middleware/validationMiddleware");

const { getProducts, createProduct,updateProduct, deleteProduct, 
    getProductByName, getProductByCategory, getLowStockProducts, getDashBoardStats,
     getProductById, getProductsWithPagination, getProductsSortedByPrice,
    getInStockProducts, getOutOfStockProducts} = require("../controllers/productController");

router.get("/products", getProducts);
router.get("/products/pagination", getProductsWithPagination);
router.get("/products/in-stock",getInStockProducts);
router.get("/products/out-stock", getOutOfStockProducts);
router.get("/products/name/:name", getProductByName);
router.get("/products/category/:category", getProductByCategory);
router.get("/products/low-stock", getLowStockProducts);
router.get("/dashboard", getDashBoardStats);
router.get("/products/:id", getProductById);
router.get("/products/sort/price", getProductsSortedByPrice);
router.post("/products",verifyToken, authorizeRole("admin"), validationProduct,createProduct);
router.put("/products/:id", verifyToken,authorizeRole("admin"),validationProduct,updateProduct);
router.delete("/products/:id",verifyToken,authorizeRole("admin"),deleteProduct);


module.exports = router;