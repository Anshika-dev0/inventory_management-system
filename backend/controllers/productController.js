const {
    getAllProducts,
    addProduct
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

module.exports = {
    getProducts,
    createProduct
};