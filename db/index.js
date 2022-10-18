const inquirer = require("inquirer")
const db = require("./db/connection");

const initialQuestions = [
    {
    type: "list",
    name: "whatDO",
    message: "What would you like to do?",
    choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "View All Departments", "Add Department", "Quit"]
}
];