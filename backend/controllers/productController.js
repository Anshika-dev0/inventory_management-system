const {
    getAllProducts,
    addProduct,
    updateProduct : updateProductModel,
    deleteProduct : deleteProductModel,
    getProductByName : getProductByNameModel,
    getProductByCategory : getProductByCategoryModel,
    getLowStockProducts : getLowStockProductsModel,
    getDashBoardStats : getDashBoardStatsModel,
    getProductById : getProductByIdModel,
    getProductsWithPagination : getProductsWithPaginationModel,
    getProductsSortedByPrice : getProductsSortedByPriceModel
} = require("../models/productModel");

const getProducts = async(req,res) => {
    try{
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: "Internal Server Error" });
    }
};

const createProduct  = async (req,res) => {
    try{
        const { name, category, price, quantity } = req.body;
        const product = await addProduct(name, category, price, quantity);
    
    res.status(201).json(product);
    } catch (error) {
        console.log(error);

        res.status(500).json({ messange: "Internal Server Error" });
    }
};

const updateProduct = async (req,res) => {
    try {
        const { id } = req.params;
        const { name, category, price, quantity } = req.body;
        const product = await updateProductModel(id,name,category,price,quantity);
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });

    }
    };
    const deleteProduct = async (req,res) => {
        try {
            const { id } = req.params;
            const product = await deleteProductModel(id);
            res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Internal Server Error"});
        }
        };
        const getProductByName = async (req,res) => {
            try{
                const { name } = req.params;
                const product = await getProductByNameModel(name);
                res.json(product);
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: "Internal Server Error" });
            }
            };

            const getProductByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        const products = await getProductByCategoryModel(category);

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
const getLowStockProducts = async (req, res) => {
    try {
        const products = await getLowStockProductsModel();

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    };

const getDashBoardStats = async (req,res) => {
    try {
        const stats = await getDashBoardStatsModel();
        res.json(stats);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    };
const getProductById = async (req,res) => {
    try {
        const { id } = req.params;
        const products = await getProductByIdModel(id);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });

    }
    };
    
    const getProductsWithPagination = async (req,res) => {
        try {
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);
            const offset = (page -1)*limit;
            const products = await getProductsWithPaginationModel(limit, offset);
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Internal Server Error"});

        }

        };

        const getProductsSortedByPrice = async (req,res) => {
            try{
                const { order} = req.query;

                const products = await getProductsSortedByPriceModel(order);

                res.json(products);
            } catch (error) {
                console.error(error);
                res.status(500).json({message: "Internal Server Error"});

            }
        };
module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByName,
    getProductByCategory,
    getLowStockProducts,
    getDashBoardStats,
    getProductById,
    getProductsWithPagination,
    getProductsSortedByPrice
};