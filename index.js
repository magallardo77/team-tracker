const inquirer = require("inquirer")
const db = require("./db/connection");

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to SQL server.")
});

const viewQuestion = [
    {
    type: "list",
    name: "viewQ",
    message: "What would you like to do?",
    choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "View All Departments", "Add Department", "Quit"]
}
];

db.connect((error) => {
    if (error) throw error;
    console.log("Success");
    init();
});

function init () {
    inquirer.prompt(viewQuestion).then((answers) => {
        switch (answers.viewQ) {
            case "Display Employees":
            viewEmployees();
            break;
            case "Display Roles":
            viewRoles();
            break;
            case "Display Departments":
            viewDepartments();
            break;
            case "Add An Additional Department":
            addDepartment();
            break;
            case "Add An Additional Role":
            addRole();
            break;
            case "Add An Additional Employee":
            addEmployee();
            break;
            case "Quit":
            console.log("Bye.");
            process.exit();
            break;
        default:
            break;

        }
    })
}

let viewEmployees = () => {
    db.query("SELECT * FROM employee;", (err, data) => {
        console.table(data);
        init();
    })
};

let viewRoles = () => {
    db.query("SELECT * FROM roles;", (err, data) => {
        console.table(data);
        init();
    })
};

let viewDepartments = () => {
    db.query("SELECT * FROM department;", (err, data) => {
        console.table(data);
        init();
    })
};

