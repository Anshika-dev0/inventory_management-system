const pool = require("../config/db");

const getAllProducts = async () => {
   const result = await pool.query("SELECT * FROM products");
   return result.rows;
};

const addProduct = async (name, category,price,quantity) => {
    const result = await pool.query(
"INSERT INTO products (name , category, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *",
     [name, category, price, quantity]);
     return result.rows[0];

    
};

const updateProduct = async (id, name , category, price, quantity) => {
    const result = await pool.query(
        "UPDATE products SET name=$1, category=$2, price=$3, quantity=$4 WHERE id=$5 RETURNING*",
        [name, category, price, quantity, id]
    );
    return result.rows[0];
    
};
const deleteProduct = async (id) => {
        const result = await pool.query("DELETE FROM products  WHERE id=$1 RETURNING *",
            [id]
        );
        return result.rows[0];
    };

const getProductByName = async (name) => {
    const result = await pool.query("SELECT * FROM products WHERE name ILIKE $1", [`%${name}%`]);
    return result.rows;
};

const getProductByCategory = async (category) => {
    const result = await pool.query(
        "SELECT * FROM products WHERE category = $1",
        [category]
    );

    return result.rows;
};


module.exports = {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductByName,
    getProductByCategory
};

 
