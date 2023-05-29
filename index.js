//Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');

//Creating connection to mysql
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'business_db',
    }
);

//Init function to run the prompt and run the appropriate function based on user decision.
function init() {
    inquirer
        .prompt(
            [{
                type: 'list',
                choices: ['View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role'],
                name: 'choiceList'
            },
            ]).then((response) => {
                switch (response.choiceList) {
                    case 'View all departments':
                        viewAllDepartments()
                        break;
                    case 'View all roles':
                        viewAllRoles()
                        break;
                    case 'View all employees':
                        viewAllEmployees()
                        break;
                    case 'Add a department':
                        addADepartment()
                        break;
                    case 'Add a role':
                        addARole()
                        break;
                    case 'Add an employee':
                        addAnEmployee()
                        break;
                    case 'Update an employee role':
                        updateEmployeeRole()
                        break;

                }

            })
}
init();

//Writing functions to show or append mysql data upon prompt choice
//Function to view every department listed in the department table
function viewAllDepartments() {
    connection.query('SELECT * FROM department;', (err, res) => {
        throw new Error('Error!')
    });
}

//Function to view all roles listed in the roles table
function viewAllRoles() {
    connection.query('SELECT * FROM role;', (err, res) => {
        throw new Error('Error!')
    });
}

//Function to view all employees listed in the employees table
function viewAllEmployees() {
    connection.query('SELECT * FROM employee;', (err, res) => {
        throw new Error('Error!')
    });
}

//Function to add a department to the departments table
function addADepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: 'Enter the name of the new department:'
        }
            .then((data) => {
                connection.query('INSERT INTO department SET ?',
                    { name: data.newDepartment }, err => {
                        throw new Error('Error!')
                    })
            }),
        viewAllDepartments()
    ])
}

//Function to add a role to the role table
function addARole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: 'Enter the name of the new role.',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Choose which department this role will be in.',
        }

    ]).then(function (data) {
        connection.query(
            'INSERT INTO role SET ?',
            {
                title: res.Title,
                salary: res.Salary,
            })

    })
}

//Function to add an employee to the employee table
function addAnEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the employee first name.'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the employee last name.'
        },
        {
            type: 'list',
            name: 'role',
            choices: addRole()
        }
    ]).then(function (data) {
        connection.query('INSERT INTO employee SET ?',
            {
                first_name: data.firstName,
                last_name: data.lastName,
                role_id: data.role,
            }
        )
    })
}

//function to update the role of an employee
function updateEmployeeRole() {
    connection.query('SELECT employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id;', err => {
        throw new Error('Error!')
    })
    inquirer.prompt([
        {
            name: 'lastName',
            type: 'list',
            choices: function () {
                var lastName = [];
                for (var i = 0; i < res.length; i++) {
                    lastName.push(res[i].last_name);
                }
                return lastName;
            },
            message: 'What is the employees last name?',
        },
        {
            name: 'role',
            type: 'rawlist',
            message: 'What is the Employees new title? ',
            choices: selectRole()
        },
    ]).then(function (val) {
        var roleId = selectRole().indexOf(val.role) + 1
        connection.query('UPDATE employee SET WHERE ?',
            {
                last_name: val.lastName

            },
            {
                role_id: roleId

            },
        )
    })
}


//A function to add a role to a new employee data (only used within the new employee function)
var roleArr = [];
function addRole() {
    connection.query('SELECT * FROM role', function (err, res) {
        if (err) throw new Error('Error!')
        for (var i = 0; i < res.length; i++) {
            roleArr.push(res[i].title);
        }
    })
    return roleArr;
}



