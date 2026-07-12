const express = require("express");
const router = express.Router();

router.get("/products", (req,res) => {
    res.send("List of products");
});

router.get("/products/:id", (req,res)=> {
    res.send(req.params.id);
});
router.get("/product/:id",(req,res) => {
    res.send(req.query.category);
});

module.exports = router;