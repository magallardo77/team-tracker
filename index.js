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

const theEmployee = [
    {
        name: "firstName",
        message: "Please enter the first name of the employee."
    },
    {
        name: "lastName",
        message: "Please enter the last name of the employee."
    },
    {
        name: "employeeRole",
        message: "Please enter the role of the employee."
    }
] 

const theRole = [
    {
        name: "initRole",
        message: "Please enter the role of the employee."
    },
    {
        name: "theSalary",
        message: "Please enter the salary of the employee."
    },
    {
        name: "theDepartment",
        message: "Please enter the department of the employee."
    }
]

const addDepartmentQuestion = [
    {
        name: "initDepartment",
        message: "Please enter the name of the department you would like to add."
    },
]

const addEmployeeQuestion = [{
    name: "eqFirstName",
    message: "Please enter the first name of the employee you would like to add."
},
{
    name: "eqLastName",
    message: "Please enter the last name of the employee you would like to add."
},
{
    type: "list",
    name: "eqRole",
    message: "Please enter the role of the employee you would like to add.",
    choices: []
},
{
    type: "list",
    name: "eq",
    message: "Please enter the Manager of the employee you would like to add.",
    choices: []
},
]

db.connect((error) => {
    if (error) throw error;
    console.log("Success");
    init();
});

let init = () => {
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


let addDepartment = async () => {
    inquirer.prompt(addDepartmentQuestion)  
        let departmentQ = await db.query(`INSERT INTO role () VALUES ();`) [response.addDepartmentQuestion]; (req, res) => {
            console.log("Success!")
            init();
        }
    } 

let addEmployee = async () => {
    db.query("SELECT * FROM department;", (err, data) => {
        ad
    }
    )
}

