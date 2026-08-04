const express = require("express");
const router = express.Router();

const {registerUser, loginUser} = require("../controllers/authController");

const { validationRegister, validationLogin} = require("../middleware/validationMiddleware");


router.post("/register",validationRegister,registerUser);
router.post("/login", validationLogin, loginUser);

module.exports = router;