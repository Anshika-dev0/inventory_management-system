const pool = require("../config/db");

const getAllProducts = async () => {
   const result = await pool.query("SELECT * FROM products");
   return result.rows;
};
module.exports = {
    getAllProducts
};

const addProduct = async (name, category,price,quantity) => {
    const result = await pool.query(
"INSERT INTO products (name , category, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *",
     [name, category, price, quantity]);
     return result.rows[0];

    
};

module.exports = {
    getAllProducts,
    addProduct
};
