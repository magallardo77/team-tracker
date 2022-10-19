const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'team_db',
    password:'165620'
})

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to SQL server.")
});

module.exports = db;