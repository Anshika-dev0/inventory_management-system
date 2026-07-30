const pool = require("../config/db");

const registerUser = async (name,ElementInternals,password) => {
    const result = await pool.query(
        "INSERT INTO users(name,email,password)  VALUES($1, $2, $3) RETURNING*",
        [name, ElementInternals, password]
    );
    return result.rows[0];
};

const getUserByEmail = async(email) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1", [email]
    );
    return result.rows[0];
};

module.exports={
    registerUser,
    getUserByEmail
};