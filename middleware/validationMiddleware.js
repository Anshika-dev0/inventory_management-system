const {body, validationResult} = require("express-validator");

const validationProduct = [
    body("name")
    .notEmpty()
    .withMessage("Product name is required"),

    body("category")
    .notEmpty()
    .withMessage("Category is required "),

    body("price")
    .isFloat({ gt: 0})
    .withMessage("Price must be greater than 0"),

    body("quantity")
    .isInt({ min:0})
    .withMessage("Quantity must be 0 or grater"),

    (req,res,next) => {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({errors:error.array()});
        }
        next();
    }
];

const validationRegister = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

    body("role")
        .isIn(["admin", "staff"])
        .withMessage("Role must be admin or staff"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }
];

const validationLogin = [
    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("password")
        .notEmpty()
        .withMessage("Password is required"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }
];

module.exports = {
    validationProduct,
    validationLogin,
    validationRegister
};