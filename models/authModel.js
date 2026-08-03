const pool = require("../config/db");

const registerUser = async (name,ElementInternals,password,role) => {
    const result = await pool.query(
        "INSERT INTO users(name,email,password,role)  VALUES($1, $2, $3,$4) RETURNING*",
        [name, ElementInternals, password, role]
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