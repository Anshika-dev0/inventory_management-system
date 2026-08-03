const { Pool } = require("pg");
const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database: "inventory_management",
    password: "Anshika@6948",
    port: 5432,
});
pool.connect()
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.log("Database Connection Failed");
    console.log(err);
});
module.exports = pool;