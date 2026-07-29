const pool = require("../config/db");

const registerUser = async (name,ElementInternals,password) => {
    const result = await pool.query(
        "INSERT INTO users(name,email,password)  VALUES($1, $2, $3) RETURNING*",
        [name, ElementInternals, password]
    );
    return result.rows[0];
};

module.exports={
    registerUser
};