const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'',
    password:'123'
})

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to SQL server.")
});

module.exports = db;