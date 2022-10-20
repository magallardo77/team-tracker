INSERT INTO department (name) 
    VALUES  ("Sales"),
            ("Engineering"),
            ("Finance"),
            ("Legal");

INSERT INTO roles (title, salary, department_id) 
    VALUES  ("Sales Lead", 100000, 1),
            ("Salesperson", 80000, 1),
            ("Lead Engineer", 150000, 2),
            ("Software Engineer", 120000, 2),
            ("Account Manager", 160000, 3),
            ("Accountant", 125000, 3),
            ("Legal Team Lead", 250000, 4),
            ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  ("John", "Doe", 1, 1),
            ("Rachel", "Thiim", 2, NULL),
            ("Toacin", "Patwary", 3, NULL),
            ("Miguel", "Gallardo", 4, 2),
            ("Derrick", "Lafforthun", 5, NULL),
            ("Morgan", "Tolman", 6, 3),
            ("Justyn", "Subrai", 7, NULL),
            ("Jesus", "Christ", 8, 4);

            SELECT * FROM department;
            SELECT * FROM roles;
            SELECT * FROM employee;

