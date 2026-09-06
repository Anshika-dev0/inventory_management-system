const express = require('express');
const cors = require("cors");

require("./config/db");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors({
    origin: "http://localhost:3001", methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}));


app.use(express.json());
app.use(productRoutes);
app.use(authRoutes);
app.use("/",userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Inventory Management System");
});
app.get("/about", (req, res) => {
    res.send("This is about page");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});