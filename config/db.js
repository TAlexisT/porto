const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "8462",
  database: "porto"
});

db.getConnection(() => {
  console.log("Connection succesful");
});

module.exports = db;
