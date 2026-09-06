const express = require('express');
const cors = require("cors");
require("./config/db");
const productRoutes = require("./routes/productRoutes");


const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(cors({
    origin:"http://localhost:3002"}));

app.use(express.json());
app.use(productRoutes);
app.use(authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Inventory Management System");
});
app.get("/about", (req, res) => {
    res.send("This is about page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});