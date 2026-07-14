const {
    getAllProducts
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
module.exports = {
    getProducts
};