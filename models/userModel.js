const pool = require("../config/db");
const getAllUsers = async () => {
    const result = await pool.query(
        "SELECT id, name, email,role FROM users ORDER BY id"
    );
    return result.rows;
};


const getUserById = async (id) => {
    const result = await pool.query(
        "SELECT id, name, email, role FROM users WHERE id = $1",
        [id]
    );
    return result.rows[0];
};

const updateUserRole = async (id, role) => {
    const result = await pool.query(
        "UPDATE users SET role = $1 WHERE id = $2 RETURNING id, name, email, role",
        [role, id]
    );
    return result.rows[0];
};

const deleteUser = async (id) => {
    const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING id",
        [id]
    );
    return result.rows[0];
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserRole,
    deleteUser,
};