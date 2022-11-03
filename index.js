const inquirer = require("inquirer")
const db = require("./db/connection");

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to SQL server.")
});

//prompt question
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

//add role prompt
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

//add department prompt
const addDepartmentQuestion = [
    {
        name: "initDepartment",
        message: "Please enter the name of the department you would like to add."
    },
]

//add employee prompt
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
    name: "eqMan",
    message: "Please enter the Manager of the employee you would like to add.",
    choices: []
},
]

db.connect((error) => {
    if (error) throw error;
    console.log("Success");
    init();
});

//initial question
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
            console.log("Quit.");
            process.exit();
            break;
        default:
            break;

        }
    })
}

// view employee function
let viewEmployees = () => {
    db.query("SELECT * FROM employee;", (err, data) => {
        console.table(data);
        init();
    })
};

// view role function
let viewRoles = () => {
    db.query("SELECT * FROM roles;", (err, data) => {
        console.table(data);
        init();
    })
};

// view department function
let viewDepartments = () => {
    db.query("SELECT * FROM department;", (err, data) => {
        console.table(data);
        init();
    })
};

//add employee function using .then syntax
let addEmployee = () => {
    db.query("SELECT * FROM role;", (err, data) => {
        addEmployeeQuestion[2].choices = data.map((element) => ({value: element.id, name: element.title}));
        db.query("SELECT * FROM employee;", (err, data) => {
        addEmployeeQuestion[3].choices = data.map((element) => ({value: element.id, name: element.first_name}));
        addEmployeeQuestion[3].choices.push({value: null, name: "None"});
        inquirer.prompt(addEmployeeQuestion)
        .then((data) => {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES ("${data.eqFirstName}", "${data.eqLastName}", ${data.eqRole}, ${eqMan})`)
                console.log("Success!")
                init();
        })
        })
    }
    )
}


// add department using async await syntax
let addDepartment = async () => {
    inquirer.prompt(addDepartmentQuestion)  
        let departmentQ = await db.query(`INSERT INTO role (name) VALUES (?);`) [addDepartmentQuestion]; (req, res) => {
            console.log("Success!")
            init();
        }
    } 

    // add role function using .then syntax
    let addRole = async () => {
        db.query("SELECT * FROM employee;"), (req, res) => {
            theRole[2].choices = datadata.map((element) => ({value: element.id, name: element.name}));
            inquirer.prompt(theRole)
            .then((data) => {
                db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES ("${data.initRole}", "${data.theSalary}", ${data.theDepartment},)`)
                console.log("Success!")
            }
            )  
        }}
