const {
    getAllProducts,
    addProduct,
    updateProduct : updateProductModel,
    deleteProduct : deleteProductModel,
    getProductByName : getProductByNameModel,
    getProductByCategory : getProductByCategoryModel
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
    
    
module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByName,
    getProductByCategory
};