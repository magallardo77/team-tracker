const inquirer = require("inquirer")
const db = require("./db/connection");

db.connect((error) => {
    if (error) throw error;
    console.log("Success");
    askInit();
});

function askInit () {
    inquirer.createPromptModule([{
        name: "name",
        message: "What's your name?"
    }]).then((answers) => {
        getEmployees();
    })
}

let getEmployees = () => {
    db.query("SELECT * FROM employee;", (err, data) => {
        console.table(data);
    })
};