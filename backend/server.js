const express = require('express');
require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use(productRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Inventory Management System");
});
app.get("/about", (req, res) => {
    res.send("This is about page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});