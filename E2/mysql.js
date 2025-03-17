const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "",
    database: "database_name",
    debug: false,
});

pool.query("SELECT * from <table_name> LIMIT 10", (err, rows) => {
    if (err) {
        console.log("error occurred during the connection.");
    }
    console.log(rows[0]);
});