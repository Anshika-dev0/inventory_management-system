const {
    getAllUsers,
    getUserById,
    updateUserRole,
    deleteUser,
} = require("../models/userModel");

const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateRole = async (req, res) => {
    try {
        const user = await updateUserRole(req.params.id, req.body.role);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const removeUser = async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } 
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    getUsers,
    getUser,
    updateRole,
    removeUser,
};